from flask import Flask
from flask import request
from classify import classify_proba, classify, classify_custom
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
	return 'Hello world! This is the back-end server for text fingerprinting'

@app.route('/predict_proba', methods=['POST'])
def predict_proba():
	# The text to classify
	text = request.form['text']
	
	# Returns list of tuples of the form (author, probability)
	results = classify_proba(text)
	probabilities = {}

	for author, percentage in results:
		probabilities[author] = percentage

	return probabilities


@app.route('/predict', methods=['POST'])
def predict():
	text = request.form['text']
	return classify(text)


@app.route('/predict_custom', methods=['POST'])
def predict_custom():
	# Some user writing samples
	text_samples = request.form['text']
	test = request.form['test']
	author_name = request.form['author']

	results = classify_custom(text_samples, author_name, test)
	probabilities = {}

	for author, percentage in results:
		probabilities[author] = percentage

	return probabilities
