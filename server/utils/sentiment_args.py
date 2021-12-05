from flask_restful import reqparse

sentiment = reqparse.RequestParser()
sentiment.add_argument('username', help="Username is required", required=True)
