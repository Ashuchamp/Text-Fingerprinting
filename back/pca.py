'''
Code for principal components analysis (PCA)
'''

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.decomposition import PCA
from DataUtils import DataUtils
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.cluster import KMeans

np.random.seed(5)

getXandY = lambda d: (list(map(lambda x: x[0], d[:, :-1])), d[:, len(d[0]) - 1])
X, y = getXandY(np.array(DataUtils('data', 'input.txt').get_data()))

pipeline = Pipeline([
	('vect', CountVectorizer()),
	('tfidf', TfidfTransformer()),
])
X_ = pipeline.fit_transform(X).todense()

fig = plt.figure()
ax = Axes3D(fig)

pca = PCA(n_components=3).fit(X_)
data3D = pca.transform(X_)

from joblib import load
classes = list(load('data/gs_clf.joblib').classes_)
colormap = {}
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', 'pink', 'brown']
for cls, clr in zip(classes, colors):
	colormap[cls] = clr

colors = list(map(lambda x: colormap[x], y))
ax.scatter(data3D[:, 0], data3D[:, 1], data3D[:, 2], c=colors)

# kmeans = KMeans(n_clusters=3).fit(X_)
# centers3D = pca.transform(kmeans.cluster_centers_)
# plt.hold(True)
# plt.scatter(centers3D[:, 0], centers3D[:, 1], centers3D[:, 2], marker='x', s=200, linewidths=3, c='r')
plt.show()
