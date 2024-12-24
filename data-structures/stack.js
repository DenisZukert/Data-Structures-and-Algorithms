import LinkedList from './linked-list.js';

class Stack {
  constructor() {
    this.list = new LinkedList();
    this.size = 0;
  }

  push(data) {
    this.list.addAtStart(data);
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    const value = this.list.get(0);
    this.list.remove(0);
    this.size--;
    return value;
  }

  peek() {
    return this.size === 0 ? null : this.list.get(0);
  }

  clear() {
    this.list = new LinkedList();
    this.size = 0;
  }

  traverse(callback) {
    if (this.size === 0) {
      console.log('Стек пуст');
      return;
    }

    let current = this.list.head;
    let index = 0;

    while (current) {
      if (callback) {
        callback(current.data, index);
      } else {
        console.log(current.data);
      }
      current = current.next;
      index++;
    }
  }
}

export default Stack;
