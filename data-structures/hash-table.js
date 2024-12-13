class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null).map(() => new Map());
  }

  _hash(key) {
    return key.toString().length % this.buckets.length;
  }

  add(key, value) {
    const index = this._hash(key);
    this.buckets[index].set(key, value);
  }

  get(key) {
    const index = this._hash(key);
    return this.buckets[index].get(key) || null;
  }

  remove(key) {
    const index = this._hash(key);
    return this.buckets[index].delete(key);
  }
}

export default HashTable;
