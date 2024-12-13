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

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  size() {
    return this.tail - this.head;
  }
}

export default Queue;
