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

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("fever", 6);
priorityQueue.enqueue("cough", 8);
priorityQueue.enqueue("abdominal pain", 3);
priorityQueue.enqueue("life-threatening injuries", 1);
priorityQueue.enqueue("sore throat", 9);
priorityQueue.enqueue("back pain", 7);
priorityQueue.enqueue("pain", 10);
priorityQueue.enqueue("severe headache", 4);
priorityQueue.enqueue("chest pain & shortness of breath", 2);
priorityQueue.enqueue("vomiting", 5);

while (!priorityQueue.empty()) {
  const {priority, value} = priorityQueue.dequeue();
  console.log(`${priority}: ${value}`);
}