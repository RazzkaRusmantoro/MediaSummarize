from flask import Flask, request, jsonify
from flask_cors import CORS
from app.routes.summarize import summarize_bp
from app.routes.chat import chat_bp
from app.routes.pdf_summarize import pdf_summarize_bp
import os

from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parents[1] / 'client' / '.env.local'

load_dotenv(dotenv_path=env_path)
app = Flask(__name__)

CORS(app)

app.register_blueprint(summarize_bp)
app.register_blueprint(chat_bp)
app.register_blueprint(pdf_summarize_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)