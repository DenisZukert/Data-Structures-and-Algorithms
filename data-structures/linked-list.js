class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current.data;
      current = current.next;
      count++;
    }
    return null;
  }

  update(index, data) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        current.data = data;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current) {
      if (count === index) {
        previous.next = current.next;
        return true;
      }
      previous = current;
      current = current.next;
      count++;
    }
    return false;
  }
}

export default LinkedList;
