// Title: max_product_2El_in_arr
// LeetCode ID: 1464_
// Difficulty: Easy
// Tags: Array,Sorting,Heap(priority Queye)
// Date: 2025-07-12
// Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //EASY SOLUTION
  // nums.sort((a,b) => a - b)

  // let num1 = nums[nums.length - 1]
  // let num2 = nums[nums.length - 2]

  // return (num1-1)*(num2-1)

  //LONG SOLUTION
  class Heap {
    #heap = [];

    getHeap() {
      return [...this.#heap];
    }

    getSize() {
      return this.#heap.length;
    }

    #leftChild(i) {
      return i * 2 + 1;
    }

    #rightChild(i) {
      return i * 2 + 2;
    }

    #parent(i) {
      return Math.floor((i - 1) / 2);
    }

    #swap(i, j) {
      [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }

    insert(value) {
      this.#heap.push(value);
      this.#bubbleUp();
    }

    //For max-heap
    #bubbleUp() {
      let index = this.getSize() - 1;
      while (index > 0 && this.#heap[index] > this.#heap[this.#parent(index)]) {
        this.#swap(index, this.#parent(index));
        index = this.#parent(index);
      }
    }

    remove() {
      if (this.getSize() === 0) return null;
      if (this.getSize() === 1) return this.#heap.pop();

      const max = this.#heap[0]; //For Max-heap
      this.#heap[0] = this.#heap.pop();
      this.#bubbleDown(0);
      return max; //For Max-heap
    }

    //For max-heap
    #bubbleDown(index) {
      let size = this.getSize();
      while (true) {
        let maxIndex = index;
        let left = this.#leftChild(index);
        let right = this.#rightChild(index);

        if (left < size && this.#heap[left] > this.#heap[maxIndex]) {
          maxIndex = left;
        }

        if (right < size && this.#heap[right] > this.#heap[maxIndex]) {
          maxIndex = right;
        }

        if (maxIndex !== index) {
          this.#swap(index, maxIndex);
          index = maxIndex;
        } else {
          break;
        }
      }
    }
  }

  let myHeap = new Heap();
  for (let num of nums) {
    myHeap.insert(num);
  }

  let num1 = myHeap.remove();
  let num2 = myHeap.remove();

  return (num1 - 1) * (num2 - 1);
};
