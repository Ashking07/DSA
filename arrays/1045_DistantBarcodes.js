// Title: 1045_DistantBarcodes
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

class MaxHeap {
  constructor() {
    // The heap is represented as an array.
    // We add null at index 0 for simpler integer-based parent/child calculations.
    this.heap = [null];
  }

  // Pushes a new element into the heap and maintains the heap property.
  add(element) {
    this.heap.push(element);
    this.bubbleUp();
  }

  // Pops the largest element from the heap.
  pop() {
    if (this.size() === 0) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    // Swap the root with the last element.
    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  // Returns the size of the heap.
  size() {
    return this.heap.length - 1;
  }

  // Moves an element up the heap to its correct position.
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      // Compare frequencies (value[1]).
      if (this.heap[index][1] <= this.heap[parentIndex][1]) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // Moves an element down the heap to its correct position.
  bubbleDown() {
    let index = 1;
    while (2 * index < this.heap.length) {
      let leftChildIndex = 2 * index;
      let rightChildIndex = 2 * index + 1;
      let largerChildIndex = leftChildIndex;

      // Find the larger child.
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] > this.heap[leftChildIndex][1]
      ) {
        largerChildIndex = rightChildIndex;
      }

      // If the current element is larger than its children, we're done.
      if (this.heap[index][1] >= this.heap[largerChildIndex][1]) {
        break;
      }

      // Swap with the larger child.
      [this.heap[index], this.heap[largerChildIndex]] = [
        this.heap[largerChildIndex],
        this.heap[index],
      ];
      index = largerChildIndex;
    }
  }
}

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  let myMap = new Map();

  for (const barcode of barcodes) {
    myMap.set(barcode, (myMap.get(barcode) || 0) + 1);
  }

  const myHeap = new MaxHeap();
  myMap.forEach((count, barcode) => {
    myHeap.add([barcode, count]);
  });

  let result = [];

  while (myHeap.size() > 1) {
    let [key1, val1] = myHeap.pop();
    let [key2, val2] = myHeap.pop();

    result.push(key1);
    result.push(key2);

    if (val1 - 1 > 0) {
      myHeap.add([key1, val1 - 1]);
    }
    if (val2 - 1 > 0) {
      myHeap.add([key2, val2 - 1]);
    }
  }

  if (myHeap.size() > 0) {
    let [key, val] = myHeap.pop();
    result.push(key);
  }

  return result;
};
