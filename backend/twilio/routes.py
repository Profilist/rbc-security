from flask import Blueprint, request, jsonify, session
from settings import Settings
from flask_cors import cross_origin
from twilio.twilio import SendGridClient
from twilio.email_template import EmailTemplate

twilio_routes = Blueprint('auth', __name__)
twilio_api_key = Settings.twilio_credentials.apiKey

@twilio_routes.route('/send', methods=['POST'])
@cross_origin()
def send():
    try:
        data = request.get_json()
        
        required_fields = ['to_email', 'subject', 'url', 'name']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        client = SendGridClient()
        template = EmailTemplate()
        name = str(data['name']).upper()
        url = str(data['url'])
        
        response = client.send_email(
            from_email="ibanking@fakerbcbank.us",
            to_email=str(data['to_email']),
            subject=str(data['subject']),
            html_content=template.generate_rbc_email(name, url)
        )
        serializable_response = {
            'status_code': response['status_code'],
            'body': response['body'].decode('utf-8'),
            'headers': dict(response['headers'].items())
        }
        
        return jsonify(serializable_response), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
