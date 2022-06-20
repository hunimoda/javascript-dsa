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
}

/******************************************************************************/
const graph = new Graph();