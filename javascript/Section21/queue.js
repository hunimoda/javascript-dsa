// Linked-list-based Queue
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.empty() ? this.front = newNode : this.back.next = newNode;
    this.back = newNode;
  }

  dequeue() {
    if (this.empty()) return;

    const removeNode = this.front;
    this.front = removeNode.next;
    if (!this.front) this.back = null;
    return removeNode.value;
  }

  peek() {
    if (!this.empty()) return this.front.value;
  }

  empty() {
    return !this.front;
  }
}


/*// Array-based Queue
class Queue {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    return this.array.shift();
  }

  peek() {
    if (!this.empty())
      return this.array[0];
  }

  empty() {
    return this.array.length === 0;
  }
}*/

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());