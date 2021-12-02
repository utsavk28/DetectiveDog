from flask_restful import Resource
from textblob import TextBlob
from textblob.sentiments import NaiveBayesAnalyzer
from .sentiment_args import sentiment
from .twitter_request import twitterUserTweetRequest


class SentimentV1(Resource):
    def get(self):
        return {"data": "HelloWorld"}

    def post(self):
        args = sentiment.parse_args()
        res = twitterUserTweetRequest(args['username'])['data']
        pos_score, neg_score = 0, 0
        pos_tweets, neg_tweets = [], []
        n = len(res['tweets'])
        for tweet in res['tweets']:
            blob = TextBlob(
                tweet['text'], analyzer=NaiveBayesAnalyzer()).sentiment
            pos_score += blob.p_pos
            neg_score += blob.p_neg

            if blob.p_pos >= blob.p_neg:
                pos_tweets.append({
                    "id": tweet['id'],
                    "text": tweet['text'],
                    'score': blob.p_pos,
                    "sentiment": "positive",
                    "url": f"https://twitter.com/{args['username']}/status/{tweet['id']}"
                })
            else:
                neg_tweets.append({
                    "id": tweet['id'],
                    "text": tweet['text'],
                    'score': blob.p_neg,
                    "sentiment": "negative",
                    "url": f"https://twitter.com/{args['username']}/status/{tweet['id']}"
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
