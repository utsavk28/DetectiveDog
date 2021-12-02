from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from api.sentiment_v1 import SentimentV1
from api.sentiment_v2 import SentimentV2
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
api = Api(app)

load_dotenv()


class Sentiment(Resource):
    def get(self):
        return {"data": "HelloWorld"}

    def post(self):
        return {"data": "HelloWorld"}


api.add_resource(Sentiment, '/sentiment')
api.add_resource(SentimentV1, '/sentiment-v1')
api.add_resource(SentimentV2, '/sentiment-v2')

if __name__ == "__main__":
    app.run(debug=True)
