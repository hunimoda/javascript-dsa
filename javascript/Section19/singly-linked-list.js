class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    this.length++ === 0 ? this.head = node : this.tail.next = node;
    this.tail = node;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const popValue = this.tail.value;
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
    const shiftValue = this.head.value;
    if (this.length === 1) this.head = this.tail = null;
    else this.head = this.head.next;
    this.length--;
    return shiftValue;
  }

  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++)
      current = current.next;
    return current;
  }

  set(index, value) {
    const setNode = this.get(index);
    if (!setNode) return false;
    setNode.value = value;
    return true;
  }
}

const list = new SinglyLinkedList();

list.unshift(1);
list.unshift(2);
list.unshift(3);
list.set(2, 7);

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));