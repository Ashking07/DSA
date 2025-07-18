// Title: _relative_ranks
// LeetCode ID: 506
// Difficulty: Easy
// Tags: Array, Sorting, Heap(Priority Queue)
// Date: 2025-07-11
// Link:https://leetcode.com/problems/relative-ranks/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  class maxHeap {
    #heap = [];

    getHeap() {
      return [...this.#heap];
    }

    #leftChild(index) {
      return index * 2 + 1;
    }

    #rightChild(index) {
      return index * 2 + 2;
    }

    #parent(index) {
      return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
      [this.#heap[index1], this.#heap[index2]] = [
        this.#heap[index2],
        this.#heap[index1],
      ];
    }

    insert(value) {
      this.#heap.push(value);
      this.#bubbleUp();
    }

    #bubbleUp() {
      let current = this.#heap.length - 1;
      while (
        current > 0 &&
        this.#heap[current] > this.#heap[this.#parent(current)]
      ) {
        this.#swap(current, this.#parent(current));
        current = this.#parent(current);
      }
    }

    remove() {
      if (this.#heap.length === 0) {
        return null;
      }
      if (this.#heap.length === 1) {
        return this.#heap.pop();
      }

      const maxValue = this.#heap[0];
      this.#heap[0] = this.#heap.pop();
      this.#bubbleDown(0);

      return maxValue;
    }

    #bubbleDown(index) {
      let maxIndex = index;
      let size = this.#heap.length;

      while (true) {
        let leftIndex = this.#leftChild(index);
        let rightIndex = this.#rightChild(index);

        if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
          maxIndex = leftIndex;
        }
        if (
          rightIndex < size &&
          this.#heap[rightIndex] > this.#heap[maxIndex]
        ) {
          maxIndex = rightIndex;
        }

        if (maxIndex !== index) {
          this.#swap(index, maxIndex);
          index = maxIndex;
        } else {
          return;
        }
      }
    }
  }

  let myHeap = new maxHeap();
  for (let el of score) {
    myHeap.insert(el);
  }

  let myMap = {};

  let i = 1;
  let ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  while (myHeap.getHeap().length > 0) {
    let maxScore = myHeap.remove();
    myMap[maxScore] = ranks[i - 1] || `${i}`;
    i++;
  }

  let answer = [];

  for (let i of score) {
    answer.push(myMap[i]);
  }

  return answer;
};
