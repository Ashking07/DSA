// Title: _min_no_game
// LeetCode ID: 2974
// Difficulty: Easy
// Tags: Array
// Sorting
// Heap (Priority Queue)
// Simulation
// Date: 2025-07-16
// Link: https://leetcode.com/problems/minimum-number-game/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  class heap {
    #heap = [];

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

    remove() {
      if (this.getSize() < 1) return null;
      if (this.getSize() === 1) return this.#heap.pop();

      let minNumber = this.#heap[0];
      this.#heap[0] = this.#heap.pop();
      this.#bubbleDown(0);

      return minNumber;
    }

    #bubbleDown(index) {
      let minIndex = index;

      while (true) {
        let leftIndex = this.#leftChild(minIndex);
        let rightIndex = this.#rightChild(minIndex);

        if (
          leftIndex < this.getSize() &&
          this.#heap[leftIndex] < this.#heap[minIndex]
        ) {
          minIndex = leftIndex;
        }
        if (
          rightIndex < this.getSize() &&
          this.#heap[rightIndex] < this.#heap[minIndex]
        ) {
          minIndex = rightIndex;
        }

        if (minIndex !== index) {
          this.#swap(minIndex, index);
          index = minIndex;
        } else {
          return;
        }
      }
    }

    insert(value) {
      this.#heap.push(value);
      this.#bubbleUp();
    }

    #bubbleUp() {
      let minIndex = this.getSize() - 1;

      while (
        minIndex > 0 &&
        this.#heap[this.#parentIndex(minIndex)] > this.#heap[minIndex]
      ) {
        this.#swap(this.#parentIndex(minIndex), minIndex);
        minIndex = this.#parentIndex(minIndex);
      }
    }
  }

  let myMinHeap = new heap();

  for (let num of nums) {
    myMinHeap.insert(num);
  }

  let res = [];

  while (myMinHeap.getSize() > 0) {
    res.push(myMinHeap.remove());
  }

  function swap(i, j) {
    [res[i], res[j]] = [res[j], res[i]];
  }

  let i = 1;
  while (i < res.length) {
    swap(i, i - 1);
    i += 2;
  }

  return res;
};
