from flask_restful import Resource
from textblob import TextBlob
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from .sentiment_args import sentiment
from .twitter_request import twitterUserTweetRequest

vader = SentimentIntensityAnalyzer()


class SentimentV2(Resource):
    def get(self):
        return {"data": "HelloWorld"}

    def post(self):
        args = sentiment.parse_args()
        res = twitterUserTweetRequest(args['username'])['data']
        pos_score, neg_score = 0, 0
        pos_tweets, neg_tweets = [], []
        n = len(res['tweets'])
        for tweet in res['tweets']:
            blob = vader.polarity_scores(tweet['text'])
            ps = (blob['compound']+1)/2
            ns = 1-ps
            pos_score += ps
            neg_score += ns

            if ps >= ns:
                pos_tweets.append({
                    "id": tweet['id'],
                    "text": tweet['text'],
                    'score': ps,
                    "sentiment": "positive",
                    "url": f"https://twitter.com/{args['username']}/status/{tweet['id']}"
                })
            else:
                neg_tweets.append({
                    "id": tweet['id'],
                    "text": tweet['text'],
                    'score': ns,
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
