// Title: _Kth_Largest_El_inArr
// LeetCode ID: 215
// Difficulty: Medium
// Tags:Array
// Divide and Conquer
// Sorting
// Heap (Priority Queue)
// Quickselect
// Date: 2025-07-21
// Link: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class maxHeap {
  #heap = [];

  constructor() {}

  getHeap() {
    return [...this.#heap];
  }

  getSize() {
    return this.#heap.length;
  }

  #parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  #leftChild(i) {
    return i * 2 + 1;
  }

  #rightChild(i) {
    return i * 2 + 2;
  }

  #swap(i, j) {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }

  insert(val) {
    this.#heap.push(val);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let current = this.getSize() - 1;
    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parentIndex(current)]
    ) {
      this.#swap(current, this.#parentIndex(current));
      current = this.#parentIndex(current);
    }
  }

  remove() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.#heap.pop();

    let maxEl = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#bubbleDown(0);
    return maxEl;
  }

  #bubbleDown(i) {
    let size = this.getSize();
    let max = i;

    while (true) {
      let leftIndex = this.#leftChild(i);
      let rightIndex = this.#rightChild(i);

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[max]) {
        max = leftIndex;
      }
      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[max]) {
        max = rightIndex;
      }

      if (max !== i) {
        this.#swap(i, max);
        i = max;
      } else {
        break;
      }
    }
  }
}

var findKthLargest = function (nums, k) {
  let myMaxHeap = new maxHeap();

  for (const num of nums) {
    myMaxHeap.insert(num);
  }

  let count = 0;
  let result = 0;
  while (count < k) {
    result = myMaxHeap.remove();
    count++;
  }

  return result;
};
