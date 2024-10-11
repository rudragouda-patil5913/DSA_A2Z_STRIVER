function dfsRec(adj, source, visited, res) {
  if (visited[source]) return;
  visited[source] = true;
  res.push(source);
  for (let neigh of adj[source]) {
    if (!visited[neigh]) {
      dfsRec(adj, neigh, visited, res);
    }
  }
  return res;
}

function dfs(V, adj) {
  const visited = new Array(V).fill(false);
  const res = [];
  for(let i = 0;i<V;i++){
     dfsRec(adj, i, visited, res)
    }
    return res
  }


const V = 4;
// const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
const adj = [[], [3], [1, 3], [2]];
console.log(dfs(V, adj));
