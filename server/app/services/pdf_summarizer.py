import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader
import google.generativeai as genai
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[3] / 'client' / '.env.local'
load_dotenv(dotenv_path=env_path)
API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)


