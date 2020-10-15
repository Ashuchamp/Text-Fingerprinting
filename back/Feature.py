import re

class Feature:
	def __init__(self, text):
		self.text = text

	def remove_punctuation(text):
		'''
		Removes punctuation from text

		>>> Feature.remove_punctuation('I ate some food for breakfast.')
		'I ate some food for breakfast'

		>>> Feature.remove_punctuation('The weather is so bad!!!')
		'The weather is so bad'

		>>> Feature.remove_punctuation('I like to play games... What about you??')
		'I like to play games What about you'

		'''
	
		return re.sub(r'[.?!]', '', text)

	def average_word_length(self):
		'''
		Average word length

		>>> Feature('The quick brown fox').average_word_length()
		4.0

		'''
		text = Feature.remove_punctuation(self.text)
		text_tokenized = text.split(' ')

		return sum(map(lambda x: len(x), text_tokenized)) / len(text_tokenized)

	def average_syllables_per_word(self):
		'''
		Average syllables per word
	
		>>> Feature('Larger meaning eater cabbage meaner').average_syllables_per_word()
		2.0

		'''
		def syllable_count(word):
			word = word.lower()
			count = 0
			vowels = "aeiouy"
			if word[0] in vowels:
				count += 1
			for index in range(1, len(word)):
				if word[index] in vowels and word[index - 1] not in vowels:
					count += 1
			if word.endswith("e"):
				count -= 1
			if count == 0:
				count += 1
			return count
	
		sum = 0
		text_tokenized = Feature.remove_punctuation(self.text).split(' ')
		for word in text_tokenized:
			sum += syllable_count(word)
		return sum / len(text_tokenized)

	def average_sentence_length(self):
		words = Feature.remove_punctuation(self.text).split(' ')
		s = sum(map(lambda word: len(word), words))
		return s / len(words)
	
	def freq_of_function_words(self):
		function_words = 'of and the to in he him her she then well however thus up on down yes okay'.split(' ')
		text_tokenized = Feature.remove_punctuation(self.text).split(' ')
		word_count = len(text_tokenized)
	
		function_words_count = len(set(text_tokenized).intersection(set(function_words)))
	
		return function_words_count / word_count
	
	def extract_features(self):
		'''
		Returns a list of the features for the text
	
		Features:
			* Average word length
			* Average syllables per word
			* Average sentence length
			* Frequency of function words (and, the, to, of, in)
		'''
		return [
			average_word_length(),
			average_syllables_per_word(),
			average_sentence_length(),
			freq_of_function_words()
		]

def main():
	pass

if __name__ == '__main__':
	main()

