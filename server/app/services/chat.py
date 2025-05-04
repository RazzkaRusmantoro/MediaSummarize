import google.generativeai as genai
import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[3] / 'client' / '.env.local'
load_dotenv(dotenv_path=env_path)

API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

def generate_chat_response(summary, message):
    """
    Generates a response to the user's question based on the provided summary.
    
    Args:
        summary (str): The summary of the video.
        message (str): The user's question.
    
    Returns:
        str: The AI-generated response.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        
        prompt = f"""
        You are an AI model named Medius trained to answer questions based on the following summary:
        {summary}

        Question: {message}

        Please provide a detailed and accurate response.
        """
        
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        raise Exception(f"Error generating chat response: {str(e)}")