class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  addAt(index, data) {
    if (index === 0) {
      this.addFirst(data);
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (current) {
      const newNode = new Node(data);
      newNode.next = current.next;
      newNode.prev = current;

      if (current.next) current.next.prev = newNode;
      current.next = newNode;

      if (!newNode.next) this.tail = newNode;
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
      if (this.head) this.head.prev = null;
      return true;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        if (current.next) current.next.prev = current.prev;
        if (current.prev) current.prev.next = current.next;
        return true;
      }
      current = current.next;
      count++;
    }
    return false;
  }

  traverseForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  traverseBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

export default DoublyLinkedList;
