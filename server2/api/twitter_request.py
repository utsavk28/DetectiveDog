import os
import tweepy
import dotenv
from dotenv import load_dotenv

load_dotenv()

consumer_key = os.getenv('API_KEY')
consumer_secret = os.getenv('API_KEY_SECRET')
bearer_token = os.getenv('BEARER_TOKEN')
access_token = os.getenv('ACCESS_TOKEN')
access_token_secret = os.getenv('ACCESS_TOKEN_SECRET')


client = tweepy.Client(consumer_key=consumer_key,
                       bearer_token=bearer_token,
                       consumer_secret=consumer_secret,
                       access_token=access_token,
                       access_token_secret=access_token_secret)


def twitterUserTweetRequest(username):
    try:
        user_res = client.get_user(username=username,
                                   tweet_fields=['id', 'public_metrics'],
                                   user_fields=['description', 'name', 'id', 'profile_image_url', 'username', 'verified', 'public_metrics']).data
        tweet_res = client.get_users_tweets(
            id=user_res['id'], max_results=10, tweet_fields=['lang']).data
        tweet_res = list(filter(lambda x: x['lang'] == 'en', tweet_res))
        tweet_res = list(map(
            lambda x: {"id": x['id'], "text": x['text']}, tweet_res))
        profile = {
            'id': user_res['id'],
            'name': user_res['name'],
            'username': user_res['username'],
            'verified': user_res['verified'],
            'profile_image_url': "".join(user_res['profile_image_url'].split('_normal')),
            'public_metrics': user_res['public_metrics'],
            'url': f"https://twitter.com/{user_res['username']}",
        }
        return {
            "type": "success",
            "data": {
                "profile": profile,
                "tweets": tweet_res
            }
        }
    except print(0):
        return {
            "type": "error",
            "data": "Something went Wrong, Please check the entered username"
        }
