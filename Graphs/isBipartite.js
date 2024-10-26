const adj = [
  [1, 4],
  [0, 2],
  [1, 3],
  [2, 4],
  [0, 3],
];
const adj1 = [[1,3],[0,2],[1,3],[0,2],[3]]
const V = 5;


const checkBipartite = (adj,source,color,currColor) =>{
    color[source] = currColor;
    for(let neigh of adj[source]){
        if(color[neigh] === color[source]) return false;
        if(color[neigh] === -1){
            let newColor = 1 -currColor;
            checkBipartite(adj,neigh,color,newColor)
        }
    }
    return true;
}

const isBipartite = (adj, V) => {
  const color = new Array(V).fill(-1);

  for (let i = 0; i < V; i++) {
    if (color[i] === -1) {
      if (checkBipartite(adj, i, color, 1)) {
        return true;
      }
    }
  }
  return false;
};

console.log(isBipartite(adj1,V));
