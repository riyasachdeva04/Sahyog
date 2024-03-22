import csv
import heapq
import graph
import pandas as pd
def dijkstra_longest_path(graph, src, dst):
   
    distances = {node: 0 for node in graph}  
    visited = set()
    paths = {src: [src]}
    
    queue = []
    heapq.heappush(queue, (0, src))
    
    while queue:
       current_dist, current_node = heapq.heappop(queue)
       if current_node in visited:
           continue
            
       visited.add(current_node)

       if current_node == dst:
           return current_dist, paths[dst]
           
       for neighbor in graph[current_node]:
           edge = graph[current_node][neighbor]
           weight = float(edge['weight'])
           
           distance = current_dist + weight
           
           if distance > distances[neighbor]:
               distances[neighbor] = distance
               paths[neighbor] = paths[current_node] + [neighbor] 
               heapq.heappush(queue, (distance, neighbor))
               
    return -float("inf"), []

with open('./translation/top_similar_languages.csv', 'r') as file1:
    reader = csv.reader(file1)
    df = pd.read_csv('./translation/sorted_scores.csv')

    # Skip the header row if present
    next(reader)

    # Create a set of languages from the first column
    languages = set(row[1] for row in reader)

    # Iterate over all language pairs
    sum = 0
    i = 0
    l = 0

    for src_lang in languages:
        for dest_lang in languages - {src_lang}:
            # Call the dijkstra_longest_path function with the current language pair
            src = src_lang
            dst = dest_lang

            desired_row = df.loc[(df['Column1'] == src) & (df['Column2'] == dst)]
            direct_val = desired_row['Sum of Function Results'].values[0]

            length, path = dijkstra_longest_path(graph.G, src, dst)
            l = max(l, length)

    for src_lang in languages:
        for dest_lang in languages - {src_lang}:
            # Call the dijkstra_longest_path function with the current language pair
            src = src_lang
            dst = dest_lang

            desired_row = df.loc[(df['Column1'] == src) & (df['Column2'] == dst)]
            direct_val = desired_row['Sum of Function Results'].values[0]

            length, path = dijkstra_longest_path(graph.G, src, dst)
            
            diff = (length - direct_val)/l
            
            if(diff > 0):
                print(f"Source: {src}, Destination: {dst}")
                # print(f"Longest path length: {length}")
                # print(f"Longest path: {' -> '.join(path)}")
                print(direct_val)
                sum += diff
                i += 1
                print()
    print(f"Average: {sum/i}")
    print(l)
            


