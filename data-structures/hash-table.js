class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null).map(() => new Map());
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
