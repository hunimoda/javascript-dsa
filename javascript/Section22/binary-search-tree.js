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
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(7);
tree.insert(6);
tree.insert(9);

console.log(tree.contains(3));  // true
console.log(tree.contains(7));  // true
console.log(tree.contains(10));  // false
console.log(tree.contains(2));  // false