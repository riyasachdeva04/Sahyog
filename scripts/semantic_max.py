import heapq
import graph

def dijkstra_longest_path(graph, src, dst):

    distances = {node: 0 for node in graph}
    queue = []
    visited = set()
    heapq.heappush(queue, (0, src))
    
    while queue:
        current_dist, current_node = heapq.heappop(queue)
        
        if current_node in visited:
            continue
            
        visited.add(current_node) 

        if current_node == dst:
           return current_dist
           
        for neighbor in graph[current_node]:
           edge = graph[current_node][neighbor]
           weight = float(edge['weight'])
           
           distance = current_dist + weight
           
           if distance > distances[neighbor]:
               distances[neighbor] = distance
               heapq.heappush(queue, (distance, neighbor))

    return -float("inf")


src = 'English'
dst = 'Urdu'
print(dijkstra_longest_path(graph.G, src, dst))