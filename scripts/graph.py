import networkx as nx
import pandas as pd

df = pd.read_csv('./translation/top_similar_languages.csv', header=None, names=['Index', 'Language 1', 'Language 2', 'Similarity'])
df = df.drop(index=0)
G = nx.Graph()

for index, row in df.iterrows():
    source = row['Language 1']
    target = row['Language 2']
    weight = row['Similarity']
    
    G.add_edge(source, target, weight=weight)
    
# print(G.edges(data=True))