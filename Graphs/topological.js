const dfsTopo = (adj,source,visited,stack) =>{
    visited[source] = true;
    for(let neigh of adj[source]){
        if(!visited[neigh]){
            dfsTopo(adj,neigh,visited,stack)
        }
    }
    stack.push(source);
}


const dfs = (edges, V) => {
  const adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }

  const visited = new Array(V).fill(false);
  const stack = [];
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfsTopo(adj, i, visited, stack);
    }
  }
  const result =[];
  while(stack.length>0){
    result.push(stack.pop())
  }
  return result;

};

const edges = [
  [1, 0],
  [0, 2],
  [2, 3],
  [3, 1],
];
const V = 4;

console.log(dfs(edges, V));
