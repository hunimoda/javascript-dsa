class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    this.length++ === 0 ? this.head = node : this.tail.next = node;
    this.tail = node;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const popValue = this.tail.val;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let newTail = this.head;
      while (newTail.next != this.tail) newTail = newTail.next;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return popValue;
  }
  
  shift() {
    if (this.length === 0) return undefined;
    const shiftValue = this.head.val;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;
    this.length--;
    return shiftValue;
  }
}

const list = new SinglyLinkedList();

list.push("Hello");
list.push("Byebye");
list.push("Wow");

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());