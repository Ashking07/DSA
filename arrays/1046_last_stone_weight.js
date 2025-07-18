// Title: last_stone_weight
// LeetCode ID: 1046_
// Difficulty: Easy
// Tags: Array, Heap (Priority Queue)
// Date: 2025-07-11
// Link:https://leetcode.com/problems/last-stone-weight/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
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
  for (let stone of stones) {
    myHeap.insert(stone);
  }

  while (myHeap.getHeap().length > 1) {
    let max1 = myHeap.remove();
    let max2 = myHeap.remove();

    let newEl = max1 - max2;

    myHeap.insert(newEl);
  }

  return myHeap.remove();
};

/* QUICK SOLUTION.
var lastStoneWeight = function(stones) {
    let q = new MaxPriorityQueue();
    for(let s of stones) {
        q.enqueue(s);
    }

    while(q.size() > 1) {
        let s1 = q.dequeue();
        let s2 = q.dequeue();
        let s = s1 - s2;
        q.enqueue(s);
    }

    return q.dequeue() || 0;
};
 */
