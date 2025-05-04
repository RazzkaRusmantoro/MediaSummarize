from flask import Blueprint, request, jsonify
from app.services.chat import generate_chat_response

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    summary = data.get('summary')
    message = data.get('message')
    if not summary or not message:
        return jsonify({"error": "Summary and message are required"}), 400

    try:
        response = generate_chat_response(summary, message)
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500