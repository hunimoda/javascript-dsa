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
    this.length++ === 0 ? this.head = newNode : this.tail.next = newNode;
    this.tail = newNode;
    return true;
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
    return true;
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

  insert(index, value) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const prevNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || this.length <= index) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removeValue = prevNode.next.value;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removeValue;
  }

  reverse() {
    if (this.length <= 1) return;

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prevNode = null;
    let currNode = this.tail;
    let nextNode = currNode.next;
    while (currNode) {
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
      nextNode = currNode?.next;
    }
    return this;
  }

  print() {
    console.log("---- Print List --------------------");
    if (this.length === 0) {
      console.log("The list is empty\n");
      return;
    }

    let display = `${this.head.value}`;
    for (let node = this.head.next; node; node = node.next)
      display += ` -> ${node.value}`;
    console.log(display + "\n");
  }
}

const list = new SinglyLinkedList();
list.print();

list.unshift("Hello");
list.print();
list.reverse();
list.print();

list.unshift("World");
list.unshift("Byebye");
list.unshift("Great");

list.print();
list.reverse();
list.print();