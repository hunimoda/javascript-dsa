// // Array-based Stack
// class Stack {
//   constructor() {
//     this.array = [];
//   }

//   push(value) {
//     this.array.push(value);
//   }

//   pop() {
//     if (this.empty()) return;
//     return this.array.pop();
//   }

//   top() {
//     if (this.empty()) return;
//     return this.array[this.array.length - 1];
//   }

//   empty() {
//     return this.array.length === 0;
//   }
// }

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

const stack = new Stack();
console.log(`(after initialization) empty: ${stack.empty()}`);
console.log(`(after initialization) pop: ${stack.pop()}`);
console.log(`(after initialization) top: ${stack.top()}`);

console.log("pushing data...");
[1, 2, 3, 4, 5].forEach(elem => {
  console.log(`pushing data ${elem}... ${stack.push(elem)}`);
});

console.log("pop!");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());