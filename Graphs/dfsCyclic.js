function dfsCheck(adj, src, visited, parent) {
  visited[src] = true;
  for (let neigh of adj[src]) {
    if (neigh == parent) continue;
    if (visited[neigh]) return true;
    if (dfsCheck(adj, neigh, visited, src)) {
      return true;
    }
  }
  return false;
}

function dfsCycle(V, adj) {
  const visited = new Array(V).fill(false);
  for (let i = 0; i < V; i++) {
    if (!visited[i] && dfsCheck(adj, i, visited, -1)) {
      return true;
    }
  }
  return false;
}


const V = 4;
// const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
const adj = [[], [2], [1, 3], [1,2]];

console.log(dfsCycle(V,adj))
