class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null).map(() => new Map());
    this.size = size;
    this.count = 0;
    this.loadFactorThreshold = 0.7;
  }

  _hash(key) {
    const keyStr = key.toString();
    let hash = 2166136261; // FNV offset basis
    for (let i = 0; i < keyStr.length; i++) {
      hash ^= keyStr.charCodeAt(i);
      hash = (hash * 16777619) >>> 0;
    }
    return hash % this.buckets.length;
  }

  _resize(newSize) {
    const oldBuckets = this.buckets;
    this.buckets = new Array(newSize).fill(null).map(() => new Map());
    this.size = newSize;
    this.count = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.add(key, value);
      }
    }
  }

  add(key, value) {
    const index = this._hash(key);
    this.buckets[index].set(key, value);
    this.count++;

    if (this.count / this.size > this.loadFactorThreshold) {
      this._resize(this.size * 2);
    }
  }

  get(key) {
    const index = this._hash(key);
    return this.buckets[index].get(key) || null;
  }

  remove(key) {
    const index = this._hash(key);
    const deleted = this.buckets[index].delete(key);
    if (deleted) {
      this.count--;
    }
    return deleted;
  }
}

export default HashTable;
