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
}

export default DoublyLinkedList;
