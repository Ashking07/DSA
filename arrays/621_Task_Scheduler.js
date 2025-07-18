// Title:_Task_Scheduler
// LeetCode ID:  621
// Difficulty: Medium
// Tags:
/*Array
Hash Table
Greedy
Sorting
Heap (Priority Queue)
Counting*/
// Date: 2025-07-17
// Link: https://leetcode.com/problems/task-scheduler/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
class MaxHeap {
  #heap = [];

  getSize() {
    return this.#heap.length;
  }

  insert(val) {
    this.#heap.push(val);
    this.#bubbleUp();
  }

  remove() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.#heap.pop();
    const top = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#bubbleDown(0);
    return top;
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

  #bubbleUp() {
    let idx = this.getSize() - 1;
    while (idx > 0) {
      let parent = this.#parentIndex(idx);
      if (this.#heap[parent][0] < this.#heap[idx][0]) {
        this.#swap(parent, idx);
        idx = parent;
      } else break;
    }
  }

  #bubbleDown(index) {
    const size = this.getSize();
    while (true) {
      let largest = index;
      let left = this.#leftChild(index);
      let right = this.#rightChild(index);

      if (left < size && this.#heap[left][0] > this.#heap[largest][0]) {
        largest = left;
      }
      if (right < size && this.#heap[right][0] > this.#heap[largest][0]) {
        largest = right;
      }

      if (largest !== index) {
        this.#swap(index, largest);
        index = largest;
      } else break;
    }
  }
}

var leastInterval = function (tasks, n) {
  const freqMap = {};
  for (let task of tasks) {
    freqMap[task] = (freqMap[task] || 0) + 1;
  }

  const heap = new MaxHeap();
  for (let key in freqMap) {
    heap.insert([freqMap[key], key]);
  }

  let time = 0;
  const cooldown = []; // Queue of [availableTime, [count, task]]

  while (heap.getSize() > 0 || cooldown.length > 0) {
    time++;

    if (heap.getSize() > 0) {
      let [count, task] = heap.remove();
      count--;
      if (count > 0) {
        cooldown.push([time + n, [count, task]]);
      }
    }

    // If any task has completed cooldown, re-add to heap
    if (cooldown.length > 0 && cooldown[0][0] === time) {
      heap.insert(cooldown.shift()[1]);
    }
  }

  return time;
};
