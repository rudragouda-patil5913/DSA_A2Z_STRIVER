const dfsCycle = (adj, source, visited, inRecursion) => {
  visited[source] = true;
  inRecursion[source] = true;
  for (let neigh of adj[source]) {
    if (!visited[neigh] && dfsCycle(adj, neigh, visited, inRecursion)) {
      return true;
    } else if (inRecursion[neigh]) {
      return true;
    }
  }
  inRecursion[source] = false;
  return false;
};

const dfs = (edges, V) => {
  const adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
  }
  const visited = new Array(V).fill(false);
  const inRecursion = new Array(V).fill(false);
  for (let i = 0; i < V; i++) {
    if (!visited[i] && dfsCycle(adj, i, visited, inRecursion)) {
      return true;
    }
  }
  return false;
};

const edges = [
  [1, 0],
  [0, 2],
  [2, 3],
  [3, 1],
];
const V = 6;

console.log(dfs(edges, V));
