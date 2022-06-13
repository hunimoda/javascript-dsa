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
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(7);
tree.insert(6);
tree.insert(9);

console.log(tree);