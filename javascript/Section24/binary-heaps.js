class BinaryHeap {
  constructor() {
    this.heap = new Array(1);
  }

  push(value) {
    function getParent(i) { return Math.floor(i / 2); }

    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 1 && value > this.heap[getParent(i)]) {
      this.heap[i] = this.heap[getParent(i)];
      i = getParent(i);
    }
    this.heap[i] = value;
  }

  pop() {
    if (this.empty()) return;

    const popValue = this.heap[1];
    const sinkValue = this.heap.pop();
    if (this.empty()) return popValue;

    let i = 1;
    while (true) {
      const leftChild = this.heap[2 * i] ?? -Infinity;
      const rightChild = this.heap[2 * i + 1] ?? -Infinity;
      if (leftChild <= sinkValue && rightChild <= sinkValue) break;
      this.heap[i] = Math.max(leftChild, rightChild);
      i = 2 * i + (leftChild <= rightChild);
    }

    this.heap[i] = sinkValue;
    return popValue;
  }

  top() {
    return this.empty() ? undefined : this.heap[1];
  }

  empty() {
    return this.heap.length === 1;
  }
}

const heap = new BinaryHeap();
for (let i = 0; i < 100; i++)
  heap.push(Math.floor(Math.random() * 500))

const sorted = [];
while (!heap.empty())
  sorted.push(heap.pop());

console.log(sorted);