import nltk
from transformers import pipeline
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
def tokenize(text):
    tokens = word_tokenize(text)
    return tokens
def remove_stopwords(text):
    tokens = word_tokenize(text)
    stop_words = set(stopwords.words("english"))
    result = []
    for word in tokens:
        if word not in stop_words:
            result.append(word)
    return result
def pos_tagging(text):
    tokens = word_tokenize(text)
    result = nltk.pos_tag(tokens)
    return result
def stemming(text):
    tokens = word_tokenize(text)
    stemmer = PorterStemmer()
    result = []
    for word in tokens:
        stem= stemmer.stem(word)
        result.append((word, stem))
    return result
def lemmatization(text):
    tokens = word_tokenize(text)
    lemmatizer = WordNetLemmatizer()
    result = []
    for word in tokens:
        lemma = lemmatizer.lemmatize(word)
        result.append((word, lemma))
    return result
def ner(text):
    ner_pipeline = pipeline(
        "token-classification",
        model="elastic/distilbert-base-uncased-finetuned-conll03-english"
    )
    result = ner_pipeline(text)
    for entity in result:
        print(entity["word"], "->", entity["entity"])
    return result