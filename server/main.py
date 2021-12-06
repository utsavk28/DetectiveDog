from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from api.sentiment_v1 import SentimentV1
from api.sentiment_v2 import SentimentV2
from api.sentiment_v3_1 import SentimentV3_1
from api.sentiment_v3_2 import SentimentV3_2
from api.sentiment_v4_1 import SentimentV4_1
from api.sentiment_v4_2 import SentimentV4_2
from api.sentiment_v4_3 import SentimentV4_3
from api.sentiment_v4_4 import SentimentV4_4
from api.sentiment_v5_1 import SentimentV5_1
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
api = Api(app)

load_dotenv()


class Sentiment(Resource):
    def get(self):
        return {"data": "Welcome to Detective Dog - Twitter Profile Sentiment Analyzer"}


api.add_resource(Sentiment, '/')
api.add_resource(SentimentV1, '/sentiment-v1/<string:username>')
api.add_resource(SentimentV2, '/sentiment-v2/<string:username>')
api.add_resource(SentimentV3_1, '/sentiment-v3-1/<string:username>')
api.add_resource(SentimentV3_2, '/sentiment-v3-2/<string:username>')
api.add_resource(SentimentV4_1, '/sentiment-v4-1/<string:username>')
api.add_resource(SentimentV4_2, '/sentiment-v4-2/<string:username>')
api.add_resource(SentimentV4_3, '/sentiment-v4-3/<string:username>')
api.add_resource(SentimentV4_4, '/sentiment-v4-4/<string:username>')
api.add_resource(SentimentV5_1, '/sentiment-v5-1/<string:username>')

if __name__ == "__main__":
    app.run(debug=True)
