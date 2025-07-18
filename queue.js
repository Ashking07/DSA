function Queue() {
  // Use 'this.collection' to keep 'collection' instance-specific
  this.collection = [];

  this.print = function () {
    console.log(this.collection);
  };

  this.enqueue = function (element) {
    this.collection.push(element);
  };

  this.dequeue = function () {
    return this.collection.shift();
  };

  this.peek = function () {
    return this.collection[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };
}

// Example usage:
const q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print(); // Output: ['a', 'b', 'c']

q.dequeue(); // Removes 'a'
q.print(); // Output: ['b', 'c']

console.log(q.peek()); // Output: 'b' (the front element)
console.log(q.size()); // Output: 2 (number of elements in the queue)
console.log(q.isEmpty()); // Output: false (since the queue is not empty)
