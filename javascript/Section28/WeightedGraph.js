class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = new Array(1);
  }

  // node: {value, priority}
  enqueue(value, priority) {
    function getParent(i) { return Math.floor(i / 2); }

    const node = new Node(value, priority);
    this.heap.push(node);
    let i = this.heap.length - 1;
    while (i > 1 && priority < this.heap[getParent(i)].priority) {
      this.heap[i] = this.heap[getParent(i)];
      i = getParent(i);
    }
    this.heap[i] = node;
  }

  dequeue() {
    if (this.empty()) return;

    const topNode = this.heap[1];
    const sinkNode = this.heap.pop();
    if (this.empty()) return topNode;

    let i = 1;
    while (true) {
      const leftChild = this.heap[2 * i];  // possibly undefined
      const rightChild = this.heap[2 * i + 1];  // possibly undefined
      const leftChildPriority = leftChild?.priority ?? Infinity;
      const rightChildPriority = rightChild?.priority ?? Infinity;

      if (leftChildPriority >= sinkNode.priority &&
          rightChildPriority >= sinkNode.priority) break;

      this.heap[i] =
          leftChildPriority < rightChildPriority ? leftChild : rightChild;
      i = 2 * i + (leftChildPriority >= rightChildPriority);
    }

    this.heap[i] = sinkNode;
    return topNode;
  }

  top() {
    return this.empty() ? undefined : this.heap[1];
  }

  empty() {
    return this.heap.length === 1;
  }
}

class WeightedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(v) {
    if (!this.edges[v]) this.edges[v] = [];
  }

  addEdge(v1, v2, weight) {
    if (!this.edges[v1].find(edge => edge.vertex === v2)) {
      this.edges[v1].push({vertex: v2, weight});
      this.edges[v2].push({vertex: v1, weight});
    }
  }

  findShortestPath(from, to) {
    const vertices = new PriorityQueue();
    const distances = {};
    const previous = {};

    // intialization
    Object.keys(this.edges).forEach(vertex => {
      distances[vertex] = vertex === from ? 0 : Infinity;
      vertices.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    });

    // main logic
    while (!vertices.empty()) {
      console.log(vertices.heap);
      console.log();
      const currVertex = vertices.dequeue().value;
      if (currVertex === to) break;
      this.edges[currVertex].forEach(({vertex, weight}) => {
        const newDistance = distances[currVertex] + weight;
        if (newDistance >= distances[vertex]) return;
        distances[vertex] = newDistance;
        previous[vertex] = currVertex;
        vertices.enqueue(vertex, distances[vertex]);
      });
    }

    // construct shortest path
    const path = [];
    for (let vertex = to; vertex; vertex = previous[vertex]) {
      path.push(vertex);
    }
    return path.reverse();
  }

  display() {
    console.log(this.edges);
  }
}

const graph = new WeightedGraph();

// add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// add edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.display();
console.log(graph.findShortestPath('A', 'E'));