import yt_dlp
import whisper
import torch
from pydub import AudioSegment
import google.generativeai as genai
import os
import json
from tqdm import tqdm
import re
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[3] / 'client' / '.env.local'
load_dotenv(dotenv_path=env_path)

print(torch.cuda.is_available())
print(torch.version.cuda)

# Create a results directory if it doesn't exist
results_dir = "results"
if not os.path.exists(results_dir):
    os.makedirs(results_dir)

# Function to sanitize filenames
def sanitize_filename(filename):
    # Replace special characters with underscores
    sanitized = re.sub(r'[\\/*?:"<>|#]', '_', filename)
    return sanitized

# Load Whisper model
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"\nLoading Whisper model on {device}...")
model = whisper.load_model('base', device=device)

# Configure Gemini API
API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

def fetch_metadata(url):
    print("\nFetching metadata...")
    ydl_opts = {'skip_download': True}

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(url, download=False)

        metadata_file = os.path.join(results_dir, "metadata.json")
        with open(metadata_file, "w", encoding="utf-8") as json_file:
            json.dump(info_dict, json_file, indent=4)

        print(f"✅ Metadata saved to {metadata_file}")
        return info_dict

def download_audio_from_youtube(info_dict):
    # Always name the file as 'audio.webm'
    output_template = "audio.%(ext)s"

    ydl_opts = {
        'format': 'bestaudio/best',
        'noplaylist': True,
        'outtmpl': output_template,
    }

    print("\nDownloading audio...")

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(info_dict["webpage_url"], download=True)
        file_extension = info_dict.get('ext', 'webm')  # Default to webm if not specified
        downloaded_filename = f"audio.{file_extension}"

        if not os.path.exists(downloaded_filename):
            raise FileNotFoundError(f"Downloaded file '{downloaded_filename}' not found.")

        # Move the downloaded file to the results directory
        destination_path = os.path.join(results_dir, downloaded_filename)
        os.rename(downloaded_filename, destination_path)

        print(f"✅ Audio saved to {destination_path}")
        return destination_path

def convert_to_wav_and_replace(input_file):
    # Always name the output file as 'audio.wav'
    output_file = os.path.join(results_dir, "audio.wav")

    print("\nConverting to WAV...")

    audio = AudioSegment.from_file(input_file)
    audio.export(output_file, format="wav")

    os.remove(input_file)
    print(f"✅ Converted to WAV: {output_file}")
    return output_file

def summarize_conversation(transcription):
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        prompt = f"""
        You are an AI model trained to summarize transcriptions in a clear and concise manner. Below is a transcript of a conversation with multiple speakers. Your task is to summarize the content while keeping the context intact, maintaining clarity, and ensuring that key points, topics, and insights are highlighted. Please do not specifically and directly mention speaker 1, speaker 2, etc.
        If there are is no diarization or no multiple speakers, do not mention that there aren't any. Just continue with the summarization.

        Please follow the format below for your summary:

        1. **Introduction**: Provide a brief overview of the conversation. Mention the primary topics or themes discussed.

        2. **Key Points**: List the major points or events discussed in the conversation in bullet form. Focus on the most important details that summarize the essence of the discussion.

        3. **Speaker Contributions**: Briefly summarize each speaker's contributions or perspectives. Mention their key statements or arguments. If applicable, note the tone or emotion expressed (e.g., frustration, excitement, etc.). ONLY ADD THIS STEP IF NECESSARY! SO IF THERE AREN'T ANY, PLEASE DON'T LIST! I REPEAT, DO NOT LIST THIS AS PART OF THE SUMMARIZATION.

        4. (or 3. if speaker contributions are not included) **Conclusion**: Provide a closing statement or conclusion that wraps up the conversation. This can be a summary of the resolution or the most important takeaway from the discussion.
        
        You can always add more sections if required. It can also be sometimes encouraged.
        ---
        **Full Conversation Transcript:**
        {transcription}
        ---
        Please generate a summary of the conversation based on the above format.
        """
        print("Prompt sent to Gemini:\n", prompt)  # Debugging: Print the prompt
        response = model.generate_content(prompt)
        print("Response from Gemini:\n", response.text)  # Debugging: Print the response
        return response.text
    except Exception as e:
        print(f"Error during summarization: {e}")
        return "Error: Unable to summarize the conversation."

def summarize_video(url):
    # Fetch metadata
    metadata = fetch_metadata(url)

    # Download audio
    downloaded_file = download_audio_from_youtube(metadata)

    # Convert to WAV
    wav_file = convert_to_wav_and_replace(downloaded_file)

    # Transcribe audio
    print("\nTranscribing audio...")
    with tqdm(total=100, desc="Transcribing") as pbar:
        result = model.transcribe(wav_file)
        pbar.update(100)

    print("\nTranscription Sample:", result['text'][:100])

    # Save the transcript
    transcription_file = os.path.join(results_dir, "transcription.json")
    with open(transcription_file, "w", encoding="utf-8") as json_file:
        json.dump(result, json_file, indent=4)

    print(f"\n✅ Transcription Saved at {transcription_file}!")

    # Summarize using Gemini
    full_transcript = result['text']
    summary = summarize_conversation(full_transcript)

    # Save the final summary
    final_summary_file = os.path.join(results_dir, "final_summary.json")
    with open(final_summary_file, "w", encoding="utf-8") as json_file:
        json.dump({"summary": summary}, json_file, indent=4)

    print(f"\n✅ Final Summary Saved at {final_summary_file}!")
    return summary

# Flask app
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({"error": "URL is required"}), 400

    try:
        summary = summarize_video(url)
        return jsonify({"summary": summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)