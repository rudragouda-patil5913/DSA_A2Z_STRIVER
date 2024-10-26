// const find = (i, parent) => {
//   if (i === parent[i]) return i;
//   return (parent[i] = find(parent[i], parent));
// };

// const union = (u, v, parent, rank) => {
//   let u_parent = find(u, parent);
//   let v_parent = find(v, parent);
//   if (u_parent === v_parent) return;
//   if (rank[u_parent] > rank[v_parent]) {
//     parent[v_parent] = u_parent;
//   } else if (rank[u_parent] < rank[v_parent]) {
//     parent[u_parent] = v_parent;
//   } else {
//     parent[u_parent] = v_parent;
//     rank[v_parent]++;
//   }
// };



// const dsu = (adj, V) => {
//   let rank = new Array(V).fill(1);
//   let parent = new Array(V);
//   for (let i = 0; i < V; i++) {
//     parent[i] = i;
//   }
//   for(let u=0;u<V;u++){
//     for(let v of adj[0]){
//         if(u<v){
//             const u_parent = find(u,parent);
//             const v_parent = find(v,parent);
//             if(u_parent === v_parent){
//                 return true;
//             }
//             union(u,v,parent,rank);
//         }
//     }
//   }
//   return false;
// };


// const adj = [
//   [1, 4],
//   [0, 2],
//   [1, 3],
//   [2, 4],
//   [0, 3],
// ];
// const adj1 = [[1, 3], [0, 2], [1, 3], [0, 2], [3]];
// const V = 5;

// console.log(dsu(adj1,V));






// satified Problem Leetcode 990

const find = (x, parent) => {
  if (x === parent[x]) return x;
  return (parent[x] = find(parent[x], parent));
};
const union = (u, v, parent, rank) => {
  const u_parent = find(u, parent);
  const v_parent = find(v, parent);
  if (u_parent === v_parent) return;
  if (rank[u_parent] > rank[v_parent]) {
    parent[v_parent] = u_parent;
  } else if (rank[u_parent] < rank[v_parent]) {
    parent[u_parent] = v_parent;
  } else {
    parent[u_parent] = v_parent;
    rank[v_parent]++;
  }
};
var equationsPossible = function (equations) {
  const V = equations.length;
  const ascii_value = 97;
  const rank = new Array(26).fill(1);
  const parent = new Array(26);
  for (let u = 0; u < 26; u++) {
    parent[u] = u;
  }
  for (let u = 0; u < V; u++) {
    let str = equations[u];
    if (str[1] == "=") {
      union(
        str.charCodeAt(0) - ascii_value,
        str.charCodeAt(3) - ascii_value,
        parent,
        rank
      );
    }
  }
  for (let u = 0; u < V; u++) {
    let str = equations[u];
    if (str[1] == "!") {
      const u_parent = find(str.charCodeAt(0) - ascii_value, parent);
      const v_parent = find(str.charCodeAt(3) - ascii_value, parent);
      console.log(u_parent,v_parent);
      if (u_parent == v_parent) {
        return false;
      }
    }
  }
  return true;
};


const equations = ["c==c", "b==d", "x!=z"];
console.log(equationsPossible(equations))
