class Queue {
  constructor(node) {
    this.array = [node];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    return this.array.shift();
  }

  empty() {
    return this.array.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert method: iterative
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return;

      const child = value < current.value ? "left" : "right";
      if (!current[child]) {
        current[child] = new Node(value);
        return;
      }
      current = current[child];
    }
  }
  
  // // Insert method: recursive
  // insertHelper(current, value) {
  //   const child = value < current.value ? "left" : "right";
  //   if (!current[child]) {
  //     current[child] = new Node(value);
  //     return;
  //   }
  //   this.insertHelper(current[child], value);
  // }

  // insert(value) {
  //   this.root ?
  //       this.insertHelper(this.root, value) :
  //       this.root = new Node(value);
  // }

  find(value) {
    let current = this.root;
    while (current) {
      if (current.value == value) return current;
      current = value < current.value ? current.left : current.right;
    }
    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  breathFirstTraverse() {
    if (!this.root) return;

    const queue = new Queue(this.root);
    const visited = [];

    while (!queue.empty()) {
      const popNode = queue.pop();
      if (popNode.left) queue.push(popNode.left);
      if (popNode.right) queue.push(popNode.right);
      visited.push(popNode.value);
    }
    return visited;
  }

  preOrderTraverse(current = this.root) {
    if (!current) return [];
    return [current.value,
            ...this.preOrderTraverse(current.left),
            ...this.preOrderTraverse(current.right)];
  }

  inOrderTraverse(current = this.root) {
    if (!current) return [];
    return [...this.inOrderTraverse(current.left), current.value,
            ...this.inOrderTraverse(current.right)];
  }

  postOrderTraverse(current = this.root) {
    if (!current) return [];
    return [...this.postOrderTraverse(current.left),
            ...this.postOrderTraverse(current.right), current.value];
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.breathFirstTraverse());
console.log(tree.preOrderTraverse());
console.log(tree.inOrderTraverse());
console.log(tree.postOrderTraverse());