import heapq
import graph

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

src = 'Bengali'
dst = 'Marathi'
# Print longest path    
length, path = dijkstra_longest_path(graph.G, src, dst)
print(length)
print(path)


