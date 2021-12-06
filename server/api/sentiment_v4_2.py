import pickle
from flask_restful import Resource
from utils.twitter_request import twitterUserTweetRequest
from utils.model_utils import cleaning_pipeline, predicting_pipeline
import pandas as pd

model = pickle.load(
    open('models/NaiveBayes/Bernoulli_NB_tfidf_lem.pkl', 'rb'))
tfidf = pickle.load(open('models/word_embedding/Tfidf.pkl', 'rb'))


class SentimentV4_2(Resource):
    """
        Bernoulli Naive Bayes Sentiment Model
        - TF-IDF
        - Lemmatizatised

        Training Score :
        F1 Score : 0.8052
        Acc. : 80.36%
        Testing : 
        F1 Score : 0.7733
        Acc. : 76.98%
    """

    def get(self,username):
        res = twitterUserTweetRequest(username)['data']
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
                    "url": f"https://twitter.com/{username}/status/{tweets[i]['id']}"
                })
            else:
                neg_tweets.append({
                    "id": tweets[i]['id'],
                    "text": tweets[i]['text'],
                    'score': ns,
                    "sentiment": "negative",
                    "url": f"https://twitter.com/{username}/status/{tweets[i]['id']}"
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
