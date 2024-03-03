import graph
import networkx as nx 
import matplotlib.pyplot as plt 
import pandas as pd
  
# Defining a Class 
class GraphVisualization: 
   
    def __init__(self): 
          
        # visual is a list which stores all  
        # the set of edges that constitutes a 
        # graph 
        self.visual = [] 
          
    # addEdge function inputs the vertices of an 
    # edge and appends it to the visual list 
    def addEdge(self, a, b): 
        temp = [a, b] 
        self.visual.append(temp) 
          
    # In visualize function G is an object of 
    # class Graph given by networkx G.add_edges_from(visual) 
    # creates a graph with a given list 
    # nx.draw_networkx(G) - plots the graph 
    # plt.show() - displays the graph 
    def visualize(self): 
        G = nx.Graph() 
        G.add_edges_from(self.visual) 
        nx.draw_networkx(G) 
        plt.show() 
  
# Driver code 
# G = GraphVisualization() 
# G.addEdge(0, 2) 
# G.addEdge(1, 2) 
# G.addEdge(1, 3) 
# G.addEdge(5, 3) 
# G.addEdge(3, 4) 
# G.addEdge(1, 0) 
# G.visualize()
df = pd.read_csv('./translation/top_similar_languages.csv', header=None, names=['Index', 'Language 1', 'Language 2', 'Similarity'])

G = GraphVisualization()

for index, row in df.iterrows():
    source = row['Language 1']
    target = row['Language 2']
    weight = row['Similarity']
    
    G.addEdge(source, target)
G.visualize()