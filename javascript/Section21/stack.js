// Array-based Stack
class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    if (this.empty()) return;
    return this.array.pop();
  }

  top() {
    if (this.empty()) return;
    return this.array[this.array.length - 1];
  }

  empty() {
    return this.array.length === 0;
  }
}

const stack = new Stack();
[1, 2, 3, 4, 5].forEach(elem => stack.push(elem));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());