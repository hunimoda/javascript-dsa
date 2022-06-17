class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++)
      total = (total * WEIRD_PRIME + key.charCodeAt(i)) % this.keyMap.length;
    return total;
  }

  set(key, value) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [[key, value]];
      return;
    }
    this.keyMap[idx] = this.keyMap[idx].filter(pair => pair[0] !== key);
    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    const idx = this._hash(key);
    for (let pair of this.keyMap[idx] ?? [])
      if (pair[0] === key) return pair[1];
  }

  keys() {
    const result = [];
    this.keyMap.forEach(pairs => pairs?.forEach(pair => result.push(pair[0])));
    return result;
  }

  values() {
    const result = [];
    this.keyMap.forEach(
        pairs => pairs?.forEach(
            pair => !result.includes(pair[1]) && result.push(pair[1])));
    return result;
  }
}

const map = new HashTable();

map.set("Kim", "A");
map.set("Lee", "B");
map.set("Park", "C");
map.set("Choi", "D");
map.set("Kwon", "F");
map.set("Yoon", "A");
map.set("Yoo", "B");
map.set("Jeong", "C");

console.log(map.keys());
console.log(map.values());