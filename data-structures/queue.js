class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enqueue(data) {
    this.items[this.tail] = data;
    this.tail++;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;

    const data = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    this.size--;
    return data;
  }

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  traverse(callback) {
    if (this.size === 0) return console.log('Очередь пуста');
    for (let i = this.head; i < this.tail; i++) {
      callback(this.items[i]);
    }
  }
}

export default Queue;
