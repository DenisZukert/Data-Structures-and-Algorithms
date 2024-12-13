class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  addAt(index, data) {
    if (index === 0) {
      this.addAtStart(data);
      return true;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current) return false;

    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;

    if (!newNode.next) this.tail = newNode;
    return true;
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

  findIndex(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

export default LinkedList;
