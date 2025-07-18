// Title: _sort_ch_by_freq
// LeetCode ID: 451
// Difficulty: Medium
// Tags: Hash Table,String,Sorting,Heap (Priority Queue),Bucket Sort,Counting
// Date: 2025-07-14
// Link:https://leetcode.com/problems/sort-characters-by-frequency/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {string} s
 * @return {string}
 */
class heap {
  #heap = [];

  getSize() {
    return this.#heap.length;
  }
  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return index * 2 + 1;
  }

  #rightChild(index) {
    return index * 2 + 2;
  }
  #parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(i, j) {
    return ([this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]]);
  }

  insert(value) {
    this.#heap.push(value);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let maxIndex = this.getSize() - 1;

    while (
      maxIndex > 0 &&
      this.#heap[maxIndex][0] > this.#heap[this.#parentIndex(maxIndex)][0]
    ) {
      this.#swap(maxIndex, this.#parentIndex(maxIndex));
      maxIndex = this.#parentIndex(maxIndex);
    }
  }

  remove() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.#heap.pop();

    let maxVal = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#bubbleDown(0);

    return maxVal;
  }

  #bubbleDown(index) {
    let maxIndex = index;

    while (true) {
      let leftIndex = this.#leftChild(maxIndex);
      let rightIndex = this.#rightChild(maxIndex);

      if (
        leftIndex < this.getSize() &&
        this.#heap[leftIndex][0] > this.#heap[maxIndex][0]
      ) {
        maxIndex = leftIndex;
      }
      if (
        rightIndex < this.getSize() &&
        this.#heap[rightIndex][0] > this.#heap[maxIndex][0]
      ) {
        maxIndex = rightIndex;
      }

      if (maxIndex !== index) {
        this.#swap(maxIndex, index);
        index = maxIndex;
      } else {
        break;
      }
    }
  }
}

var frequencySort = function (s) {
  if (s.length === 1) return s;
  let myMap = {};

  for (let i = 0; i < s.length; i++) {
    myMap[s[i]] = (myMap[s[i]] || 0) + 1;
  }

  let result = "";

  let myHeap = new heap();
  for (const key of Object.keys(myMap)) {
    myHeap.insert([myMap[key], key]);
  }

  while (myHeap.getSize() > 0) {
    let [freq, letter] = myHeap.remove();
    for (let i = 0; i < freq; i++) {
      result += letter;
    }
  }

  return result;
};
