/*************************************************
 * Class 'Node' for Doubly-linked List
 * 
 * possible constructions:
 *  - Node(7);            // equivalent to Node(7, null, null);
 *  - Node(7, next)       // equivalent to Node(7, next, null);
 *  - Node(7, next, prev)
 */
class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/*************************************************
 * Doubly-linked List
 * 
 * properties:
 *  - head
 *  - tail
 *  - length
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    console.log("---- Print DLL -------------------------");
    console.log(`length: ${this.length}`);
    let listString = null;
    if (this.length === 0) {
      listString = "The list is empty";
    } else {
      listString = `${this.head.value}`;
      for (let node = this.head.next; node; node = node.next)
        listString += ` <-> ${node.value}`;
    }
    console.log(listString + "\n");
  }

  push(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    const popNode = this.tail;
    this.tail = this.tail.prev;
    if (this.length === 1) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    popNode.prev = null;
    return popNode;
  }

  shift() {
    if (this.length === 0) return;
    const shiftNode = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.length--;
    shiftNode.next = null;
    return shiftNode;
  }

  unshift(value) {
    const newNode = new Node(value, this.head);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    let node;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++)
        node = node.next;
    } else {
      node = this.tail;
      for (let i = 0; i < this.length - index - 1; i++)
        node = node.prev;
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    const newNode = new Node(value, nextNode, prevNode);

    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;

    removeNode.next = null, removeNode.prev = null;
    prevNode.next = nextNode, nextNode.prev = prevNode;
    this.length--;
    return removeNode;
  }
}

const list = new DoublyLinkedList();
const listItems = ["hello", "nice", "to", "meet", "you", "!"];
listItems.forEach(item => list.push(item));
list.print();

list.insert(0, "AAAA");
list.insert(7, "BBBB");
list.insert(10, "XXXX");
list.insert(3, "CCCC");
list.print();

console.log(list.remove(-1));
console.log(list.remove(0));
list.print();

console.log(list.remove(9));
console.log(list.remove(3));
list.print();