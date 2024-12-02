class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  _hash(key) {
    return key.toString().length % this.buckets.length;
  }

  add(key, value) {
    const index = this._hash(key);
    this.buckets[index].push({ key, value });
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    for (let pair of bucket) {
      if (pair.key === key) return pair.value;
    }
    return null;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

export default HashTable;
