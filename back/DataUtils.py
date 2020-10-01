import re
import urllib.request

class DataUtils:
	def __init__(self, path, filename):
		# path to data directory
		self.path = path
		self.filename = filename

	def _get_html(url):
		x = urllib.request.urlopen(url)
		html = x.read().decode('utf-8')
		x.close()
		return html

	def _bs_preprocess(html):
		'''
		Remove distracting whitespaces and newline characters
		'''
		pat = re.compile('(^[\s]+)|([\s]+$)', re.MULTILINE)
		html = re.sub(pat, '', html) # remove leading and trailing whitespaces
		html = re.sub('\n', ' ', html) # convert newlines to spaces
		html = re.sub('[\s]+<', '<', html) # remove whitespaces before opening tags
		html = re.sub('>[\s]+', '>', html) # remove whitespaces after closing tags
		return html 

	def get_data(self):
		'''
		Returns an array of arrays containing training data
		Format: [[text1, author1], [text2, author2]...]
		'''
		f = open(self.path + '/' + self.filename)
		data = []
		for line in f:
			if line == '': continue
			x = line.split(' ')
			data.append([' '.join(x[1: ]), x[0]])
		f.close()	
		return data
