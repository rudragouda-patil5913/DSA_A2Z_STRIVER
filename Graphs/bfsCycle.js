function bfsCheck(adj,src,visited){
    visited[src] = true
    const q = [[src,-1]];
    while(q.length>0){
        const [src,parent] = q.shift();
        for(let neigh of adj[src]){
            if(!visited[neigh]){
                visited[neigh] = true
                q.push([neigh,src]);
            }else if(neigh != parent){
                return true;
            }
        }
    }
    return false;
}


function bfsCycle(V, adj) {
  const visited = new Array(V).fill(false);
  for (let i = 0; i < V; i++) {
    if (!visited[i] && bfsCheck(adj, i, visited)) {
      return true;
    }
  }
  return false;
}

const V = 4;
// const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
const adj = [[], [2], [1, 3], [2]];

console.log(bfsCycle(V, adj));
