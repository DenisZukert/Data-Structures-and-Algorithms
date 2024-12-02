class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.head.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  update(index, data) {
    if (!this.head) return false;

    let current = this.head;
    let count = 0;

    do {
      if (count === index) {
        current.data = data;
        return true;
      }
      current = current.next;
      count++;
    } while (current !== this.head);

    return false;
  }

  remove(index) {
    if (!this.head) return false;

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      return true;
    }

    do {
      previous = current;
      current = current.next;
      count++;

      if (count === index) {
        previous.next = current.next;
        return true;
      }
    } while (current !== this.head);

    return false;
  }
}

export default CircularLinkedList;