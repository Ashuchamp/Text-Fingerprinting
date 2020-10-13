from sklearn import svm
from sklearn.preprocessing import normalize
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import SGDClassifier
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split
import numpy as np
from DataUtils import DataUtils
from joblib import dump, load
import os.path
from os import path

def getXandY(d):
	arr = np.array(d)
	X = list(map(lambda x: x[0], arr[:, :-1]))
	y = arr[:, len(arr[0]) - 1]
	return X, y

def classify(text):
	'''
	Classifies text
	'''

	clf = load('data/gs_clf.joblib')
	return clf.predict([text])[0]

def classify_proba(text):
	'''
	Classifies text with probability output
	'''

	# clf uses log loss, so predict_proba works
	clf = load('data/clf.joblib')
	return list(zip(list(clf.classes_), list(clf.predict_proba([text])[0])))

def classify_custom(text_samples, author_name, test):
	X, y = getXandY(DataUtils('data', 'input.txt').get_data())
	X.extend(text_samples)
	y.extend([author_name for sample in text_samples])

	X_train, X_test, y_train, y_test = test_train_split(
		X, y, test_size=0.0, random_state=42
	)

	clf = Pipeline([
		('vect', CountVectorizer()),
		('tfidf', TfidfTransformer()),
		('clf', SGDClassifier(loss='log', penalty='l2', alpha=1e-3, random_state=42, max_iter=5, tol=None)),
	])
	clf.fit(X_train, y_train)

	predicted = clf.predict_proba([test])[0]
	return list(zip(list(clf.classes_), list(predicted)))

def main():
	X, y = getXandY(DataUtils('data', 'input.txt').get_data())

	X_train, X_test, y_train, y_test = train_test_split(
		X, y, test_size=0.33, random_state=42
	)

	text_clf = Pipeline([
		('vect', CountVectorizer()),
		('tfidf', TfidfTransformer()),
		('clf', SGDClassifier(loss='log', penalty='l2', alpha=1e-3, random_state=42, max_iter=5, tol=None)),
	])

	text_clf.fit(X_train, y_train)

	predicted = text_clf.predict(X_test)
	accuracy = np.mean(predicted == y_test)
	print('SGD Classifier Accuracy: ' + str(accuracy))

	dump(text_clf, 'data/clf.joblib')

	parameters = {
		'vect__ngram_range': [(1, 1), (1, 2)],
		'tfidf__use_idf': (True, False),
		'clf__alpha': (1e-2, 1e-3),
		'clf__loss': ('hinge', 'log', 'squared_hinge', 'perceptron'), 
	}

	gs_clf = GridSearchCV(text_clf, parameters, cv=5, n_jobs=-1)
	gs_clf.fit(X_train, y_train)
	gs_predicted = gs_clf.predict(X_test)
	print('GridSearch Accuracy: ' + str(np.mean(gs_predicted == y_test)))

	dump(gs_clf, 'data/gs_clf.joblib')

if __name__ == '__main__':
	main()

