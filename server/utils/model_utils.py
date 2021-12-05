from nltk.stem import WordNetLemmatizer
import re
import string
import unidecode
from bs4 import BeautifulSoup
from .stop_words import stop_words

# nltk.download('stopwords')
# nltk.download('wordnet')
# nltk.download('movie_reviews')
# nltk.download('punkt')

lemmatizer = WordNetLemmatizer()


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


def remove_urls(text):
    url_pattern = re.compile(r'https?:\/\/\S+|www\.\S+')
    return url_pattern.sub(r'', text)


def remove_twitter_handles(text):
    pattern = re.compile(r'@[^\s]+')
    return pattern.sub(r'', text)


def remove_digts(text):
    return re.sub(r'\w*\d\w*', ' ', text)


def remove_punctuations(text):
    return text.translate(str.maketrans('', '', string.punctuation))


def remove_stopwords(text):
    return " ".join([word for word in str(text).split() if word not in stop_words])


def lemmatize_words(text):
    return " ".join([lemmatizer.lemmatize(word) for word in text.split()])


def cleaning_pipeline(x):
    x = x.fillna("")
    x = x.apply(lower_case)
    x = x.apply(strip_html_tags)
    x = x.apply(accented_chars_to_ascii)
    x = x.apply(remove_urls)
    x = x.apply(remove_twitter_handles)
    x = x.apply(remove_digts)
    x = x.apply(remove_punctuations)
    x = x.apply(remove_stopwords)
    x = x.apply(lemmatize_words)
    return x


def predicting_pipeline(x, model, vectorizer):
    pow = vectorizer.transform(x)
    pred = model.predict_proba(pow)
    return pred[:, 1]
