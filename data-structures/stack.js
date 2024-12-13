class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}
export default Stack;
