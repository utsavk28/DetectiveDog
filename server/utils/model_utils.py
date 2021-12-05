from nltk.stem import WordNetLemmatizer
from nltk.stem.porter import PorterStemmer
from nltk.corpus import stopwords
import os
import re
import json
import string
import math
from tqdm import tqdm
import emot
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import sklearn
import nltk
import spacy
import unidecode
from bs4 import BeautifulSoup
import contractions
import pickle
from emot.emo_unicode import EMOTICONS_EMO
from emot.emo_unicode import EMOJI_UNICODE, UNICODE_EMOJI
from sklearn.metrics import f1_score, accuracy_score

nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('movie_reviews')
nltk.download('punkt')


def lower_case(text):
    return text.lower()


def strip_html_tags(text):
    """remove html tags from text"""
    soup = BeautifulSoup(text, "html.parser")
    stripped_text = soup.get_text(separator=" ")
    return stripped_text


def accented_chars_to_ascii(text):
    """Remove accented characters from text"""
    text = unidecode.unidecode(text)
    return text


def expand_contractions(text):
    """expand shortend words, e.g. `don't` to `do not` """
    text = contractions.fix(text)
    return text


def remove_urls(text):
    url_pattern = re.compile(r'https?:\/\/\S+|www\.\S+')
    return url_pattern.sub(r'', text)


def remove_twitter_handles(text):
    pattern = re.compile(r'@[^\s]+')
    return pattern.sub(r'', text)


def convert_emoticons(text):
    for emot in EMOTICONS_EMO:
        text = re.sub(u'('+re.escape(emot)+')', " " +
                      "_".join(EMOTICONS_EMO[emot].replace(",", "").split())+" ", text)
    return text


def convert_emojis(text):
    for emot in UNICODE_EMOJI:
        text = re.sub(r'('+re.escape(emot)+')', "_".join(
            UNICODE_EMOJI[emot].replace(',', '').replace(":", "").split()), text)
    return text


def remove_digts(text):
    return re.sub(r'\w*\d\w*', ' ', text)


def remove_punctuations(text):
    return text.translate(str.maketrans('', '', string.punctuation))


stop_words = set(stopwords.words('english'))


def remove_stopwords(text):
    return " ".join([word for word in str(text).split() if word not in stop_words])


stemmer = PorterStemmer()


def stem_words(text):
    return " ".join([stemmer.stem(word) for word in text.split()])


lemmatizer = WordNetLemmatizer()


def lemmatize_words(text):
    return " ".join([lemmatizer.lemmatize(word) for word in text.split()])


def cleaning_pipeline(x):
    x = x.fillna("")
    x = x.apply(lower_case)
    x = x.apply(strip_html_tags)
    x = x.apply(accented_chars_to_ascii)
    x = x.apply(remove_urls)
    x = x.apply(remove_twitter_handles)
    # x = x.apply(convert_emoticons)
    # x = x.apply(convert_emojis)
    x = x.apply(remove_digts)
    x = x.apply(remove_punctuations)
    x = x.apply(remove_stopwords)
    x = x.apply(expand_contractions)
    # x = x.apply(stem_words)
    x = x.apply(lemmatize_words)
    return x


def predicting_pipeline(x, model, vectorizer):
    pow = vectorizer.transform(x)
    pred = model.predict_proba(pow)
    return pred[:,1]
