class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return ++this.size;
  }

  pop() {
    if (this.empty()) return;
    const popNode = this.head;
    this.head = popNode.next;
    this.size--;
    return popNode.value;
  }

  top() {
    return this.head?.value;
  }

  empty() {
    return !this.head;
  }
}

class Graph {
  constructor() {
    this.connections = {};
  }

  add(vertex) {
    this.connections[vertex] ??= [];
  }

  remove(vertex) {
    if (!this.connections[vertex]) {
      console.error(`Vertex ${vertex} does not exist`);
      return;
    }
    // Method 1
    while (this.connections[vertex].length)
      this.disconnect(this.connections[vertex].pop(), vertex);

    //// Method 2: be careful when deleting items in loop
    // this.connections[vertex].forEach(
    //     v => {
    //       const idx = this.connections[v].indexOf(vertex);
    //       if (idx >= 0) this.connections[v].splice(idx, 1);
    //     });
    delete this.connections[vertex];
  }

  connect(v1, v2) {
    if (!this.connections[v1] || !this.connections[v2]) {
      console.error(`Check if vertices '${v1}' or '${v2}' exist`);
      return;
    }
    if (!this.connections[v1].includes(v2))
      this.connections[v1].push(v2);
    if (!this.connections[v2].includes(v1))
      this.connections[v2].push(v1);
  }

  disconnect(v1, v2) {
    if (!this.connections[v1] || !this.connections[v2]) {
      console.error(`Check if vertices '${v1}' or '${v2}' exist`);
      return;
    }
    let idx = this.connections[v1].indexOf(v2);
    if (idx >= 0)
      this.connections[v1].splice(idx, 1);
    idx = this.connections[v2].indexOf(v1);
    if (idx >= 0)
      this.connections[v2].splice(idx, 1);
  }

  display() {
    console.log("==== Display Graph =================================");
    const vertices = Object.keys(this.connections);
    if (!vertices.length) {
      console.log("The graph is empty");
    } else {
      vertices.forEach(vertex =>
          console.log(`${vertex}: ${this.connections[vertex]}`));
    }
    console.log("====================================================");
  }

  // depth-first search (recursive version)
  dfsRecursive() {
    const visited = new Set();
    const connections = this.connections;
    const startVertex = Object.keys(connections)[0];

    startVertex && (function dfsHelper(vertex) {
      visited.add(vertex);
      connections[vertex].forEach(
          neighbor => !visited.has(neighbor) && dfsHelper(neighbor));
    })(startVertex);

    return Array.from(visited);
  }
}

/******************************************************************************/
const graph = new Graph();

graph.add("A");
graph.add("B");
graph.add("C");
graph.add("D");
graph.add("E");
graph.add("F");

graph.connect("A", "B");
graph.connect("A", "C");
graph.connect("B", "D");
graph.connect("C", "E");
graph.connect("D", "E");
graph.connect("D", "F");
graph.connect("E", "F");

graph.display();
console.log(graph.dfsRecursive());