//Max-Heap Implementation

// 1) Helper functions: parentIndex, leftChild, rightChild, swap, getHeap, heap size, etc
// 2) insert() method -> we'll be always inserting form the end of the array, so we'll need a bubbleUp helper function to
// place our newly inserted value in right place
// 3) remove() method -> we'll be always removing the topmost element from our heap, and then placing the last element
// at the top -> then we'll need a bubbleDown helper function to sink down that newly placed top value to it's right
// place in the Tree

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

  /*
  //FOR MIN-heap
  #bubbleUp() {
    let index = this.getSize() - 1;
    while (index > 0 && this.#heap[index] < this.#heap[this.#parent(index)]) {
      this.#swap(index, this.#parent(index));
      index = this.#parent(index);
    }
  }
  */

  remove() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.#heap.pop();

    const max = this.#heap[0]; //For Max-heap
    // const min = this.#heap[0]; //For Min-heap
    this.#heap[0] = this.#heap.pop();
    this.#bubbleDown(0);
    return max; //For Max-heap
    // return min; //For Max-heap
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

  /* FOR MIN-Heap
  #bubbleDown(index) {
    let size = this.getSize();
    while (true) {
      let minIndex = index;
      let left = this.#leftChild(index);
      let right = this.#rightChild(index);

      if (left < size && this.#heap[left] < this.#heap[minIndex]) {
        minIndex = left;
      }

      if (right < size && this.#heap[right] < this.#heap[minIndex]) {
        maxIndex = right;
      }

      if (minIndex !== index) {
        this.#swap(index, minIndex);
        index = minIndex;
      } else {
        break;
      }
    }
  }
  */
}

// ✅ Testing
let myHeap = new Heap();
myHeap.insert(2);
myHeap.insert(8);
myHeap.insert(1);
myHeap.insert(5);
myHeap.insert(4);

console.log(myHeap.getHeap()); // [8, 5, 1, 2, 4]
console.log(myHeap.remove()); // 8
console.log(myHeap.getHeap()); // [5, 4, 1, 2]
