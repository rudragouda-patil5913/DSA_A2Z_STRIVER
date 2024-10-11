function bfsGraph(adj, source, visited, res) {
  visited[source] = true;
  const q = [source];
  while (q.length > 0) {
    const node = q.shift();
    res.push(node);
    for (let neigh of adj[node]) {
      if (!visited[neigh]) {
        visited[neigh] = true;
        q.push(neigh);
      }
    }
  }
  return res;
}

function bfs(V, adj) {
  const visited = new Array(V).fill(false);
  const res = [];
  bfsGraph(adj, 0, visited, res);
  return res;
}

const V = 4;
const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
// const adj = [[], [2], [1, 3], [2]];
console.log(bfs(V, adj));
