class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    this.items[this.tail] = data;
    this.tail++;
  }

  dequeue() {
    if (this.size() === 0) return null;

    const data = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return data;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  size() {
    return this.tail - this.head;
  }

  traverse(callback) {
    if (this.isEmpty()) return console.log('Очередь пуста');
    for (let i = this.head; i < this.tail; i++) {
      callback(this.items[i]);
    }
  }
}

export default Queue;
