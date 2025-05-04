from flask import Blueprint, request, jsonify
import PyPDF2
import io
import google.generativeai as genai
import json
import os

from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[3] / 'client' / '.env.local'
load_dotenv(dotenv_path=env_path)

API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# Create a Blueprint for PDF summarization
pdf_summarize_bp = Blueprint('pdf_summarize', __name__)

def summarize_text(text):
    """
    Summarize the given text using the Gemini API.
    """
    prompt = f"""
    You are an AI model trained to summarize text in a clear and concise manner. Below is a text that needs to be summarized. Your task is to summarize the content while keeping the context intact, maintaining clarity, and ensuring that key points, topics, and insights are highlighted.

    Please follow the format below for your summary:

    1. **Introduction**: Provide a brief overview of the text. Mention the primary topics or themes discussed.

    2. **Key Points**: List the major points or events discussed in the text in bullet form. Focus on the most important details that summarize the essence of the content.

    3. **Conclusion**: Provide a closing statement or conclusion that wraps up the text. This can be a summary of the resolution or the most important takeaway.

    ---
    **Text to Summarize:**
    {text}
    ---
    Please generate a summary of the text based on the above format.
    """

    try:
        response = model.generate_content(prompt)
        if hasattr(response, 'text') and response.text:
            return response.text
        else:
            return "Error: Unable to summarize the text."
    except Exception as e:
        return f"Error during summarization: {e}"

@pdf_summarize_bp.route('/summarize-pdf', methods=['POST'])
def summarize_pdf():
    try:
        # Check if a file is uploaded
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']

        # Check if the file is a PDF
        if file.filename.endswith('.pdf'):
            # Read the PDF file
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""

            # Extract text from each page
            for page in pdf_reader.pages:
                text += page.extract_text()

            # Summarize the extracted text using Gemini
            summary = summarize_text(text)

            # Return the summary
            return jsonify({"summary": summary}), 200
        else:
            return jsonify({"error": "Invalid file type. Please upload a PDF."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500