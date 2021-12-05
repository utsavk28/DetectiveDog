import pickle
from flask_restful import Resource
from textblob import TextBlob
from textblob.sentiments import NaiveBayesAnalyzer
from utils.sentiment_args import sentiment
from utils.twitter_request import twitterUserTweetRequest
from utils.model_utils import cleaning_pipeline, predicting_pipeline
import pandas as pd

model = pickle.load(
    open('models/GradientBoosting/GBC_Classifier_tfidf_lem1.pkl', 'rb'))
tfidf = pickle.load(open('models/word_embedding/Tfidf5.pkl', 'rb'))


class SentimentV5_1(Resource):
    """
        Gradient Boosting Classifier Sentiment Model
        - TF-IDF 
            - min df = 5
        - Lemmatizatised
        - Gradient Boosting 
            - lr = 1.5
            - n = 150
            - depth = 10

        Training Score :
        F1 Score : 0.8065
        Acc. : 80.03%
        Testing : 
        F1 Score : 0.7780
        Acc. : 77.00%
    """

    def get(self):
        return {"data": "HelloWorld"}

    def post(self):
        args = sentiment.parse_args()
        res = twitterUserTweetRequest(args['username'])['data']
        pos_score, neg_score = 0, 0
        pos_tweets, neg_tweets = [], []
        n = len(res['tweets'])
        tweets = res['tweets']
        df = pd.Series(res['tweets']).apply(lambda x: x['text'])
        df = cleaning_pipeline(df)
        pred = predicting_pipeline(df, model, tfidf)

        for i in range(n):
            ps = pred[i]
            ns = 1-ps
            pos_score += ps
            neg_score += ns

            if ps >= ns:
                pos_tweets.append({
                    "id": tweets[i]['id'],
                    "text": tweets[i]['text'],
                    'score': ps,
                    "sentiment": "positive",
                    "url": f"https://twitter.com/{args['username']}/status/{tweets[i]['id']}"
                })
            else:
                neg_tweets.append({
                    "id": tweets[i]['id'],
                    "text": tweets[i]['text'],
                    'score': ns,
                    "sentiment": "negative",
                    "url": f"https://twitter.com/{args['username']}/status/{tweets[i]['id']}"
                })
        pos_score /= n
        neg_score /= n

        return {
            "data": {
                "profile": res["profile"],
                "pos_score": pos_score,
                "neg_score": neg_score,
                "pos_tweets": pos_tweets,
                "neg_tweets": neg_tweets
            }
        }
