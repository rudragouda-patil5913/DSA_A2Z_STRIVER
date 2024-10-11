// class Graph {
//   constructor() {
//     this.adjancencyList = new Map();
//   }

//   addVertex(vertex) {
//     this.adjancencyList.set(vertex, []);
//   }
//   addEdges(vertex, edges) {
//     this.adjancencyList.get(vertex).push(edges);
//   }

//   display() {
//     for (let [vertex, edges] of this.adjancencyList) {
//       console.log(vertex + "-->" + edges);
//     }
//   }
// }

// let g = new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");

// g.addEdges("A", "B");
// g.addEdges("A", "C");

// g.display();

function bfs(adj, source) {
  const visited = new Array(V).fill(false);
  const res = [];
  const stack = [];
  stack.push(source);
  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node);
    if (!visited[node]) {
      visited[node] = true;
      for (let i = adj[node].length - 1; i >= 0; i--) {
        let neighbour = adj[node][i]
        if (!visited[neighbour]) {
          stack.push(neighbour);
        }
      }
    }
  }

  return res;
}

function graph(V, edges) {
  //creating the edges
  function addEdges(adj, source, dest) {
    adj[source].push(dest);
    adj[dest].push(source);
  }
  // creating adj List
  const adj = Array.from({ length: V }, () => []);

  for (let e of edges) {
    addEdges(adj, e[0], e[1]);
  }

  return bfs(adj, 0);
}

const V = 5;
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
];

console.log(graph(V, edges));
