from flask import Flask

app = Flask(__name__)

from app.routes.summarize import summarize_bp
from app.routes.chat import chat_bp
from app.routes.pdf_summarize import pdf_summarize_bp

app.register_blueprint(summarize_bp)
app.register_blueprint(chat_bp)