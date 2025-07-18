// Title: Final Array State After K Multiplication Operations I
// LeetCode ID: 3264_
// Difficulty: Easy
// Tags:Array
// Math
// Heap (Priority Queue)
// Simulation
// Date: 2025-07-16
// Link:https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  class MinHeap {
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
      return 2 * i + 1;
    }

    #rightChild(i) {
      return 2 * i + 2;
    }

    #swap(i, j) {
      [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }

    insert(value) {
      this.#heap.push(value);
      this.#bubbleUp();
    }

    #bubbleUp() {
      let index = this.getSize() - 1;
      while (index > 0) {
        let parent = this.#parentIndex(index);

        if (
          this.#heap[index][0] < this.#heap[parent][0] ||
          (this.#heap[index][0] === this.#heap[parent][0] &&
            this.#heap[index][1] < this.#heap[parent][1])
        ) {
          this.#swap(index, parent);
          index = parent;
        } else {
          break;
        }
      }
    }

    remove() {
      if (this.getSize() === 0) return null;
      if (this.getSize() === 1) return this.#heap.pop();

      const minValue = this.#heap[0];
      this.#heap[0] = this.#heap.pop();
      this.#bubbleDown(0);

      return minValue;
    }

    #bubbleDown(index) {
      const size = this.getSize();
      while (true) {
        let minIndex = index;
        let left = this.#leftChild(index);
        let right = this.#rightChild(index);

        if (
          left < size &&
          (this.#heap[left][0] < this.#heap[minIndex][0] ||
            (this.#heap[left][0] === this.#heap[minIndex][0] &&
              this.#heap[left][1] < this.#heap[minIndex][1]))
        ) {
          minIndex = left;
        }

        if (
          right < size &&
          (this.#heap[right][0] < this.#heap[minIndex][0] ||
            (this.#heap[right][0] === this.#heap[minIndex][0] &&
              this.#heap[right][1] < this.#heap[minIndex][1]))
        ) {
          minIndex = right;
        }

        if (minIndex !== index) {
          this.#swap(index, minIndex);
          index = minIndex;
        } else {
          break;
        }
      }
    }
  }

  let myMinHeap = new MinHeap();
  let myArr = [...nums];

  // Insert: [value, index]
  for (let i = 0; i < nums.length; i++) {
    myMinHeap.insert([nums[i], i]);
  }

  while (k > 0) {
    const [val, idx] = myMinHeap.remove();
    const updated = val * multiplier;
    myArr[idx] = updated;
    myMinHeap.insert([updated, idx]);
    k--;
  }

  return myArr;
};
