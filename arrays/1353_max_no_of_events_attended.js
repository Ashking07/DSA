// Title: _max_no_of_events_that_can_be_attended
// LeetCode ID: 1353
// Difficulty: Medium
// Tags: Array
// Greedy
// Sorting
// Heap (Priority Queue)
// Date: 2025-07-17
// Link: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/description/?envType=daily-question&envId=2025-07-07

/**
 * @param {number[][]} events
 * @return {number}
 */
// var maxEvents = function(events) {
//     events.sort((a, b) => a[1] - b[1])

//     let visited = new Array(100001).fill(false); // Track booked days
//     let eventsICanAttend = 0;

//     for (let [start, end] of events) {
//         for (let day = start; day <= end; day++) {
//             if (!visited[day]) {
//                 visited[day] = true;
//                 eventsICanAttend++;
//                 break;
//             }
//         }
//     }

//     return eventsICanAttend;
// };

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const elem = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= elem) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = elem;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const elem = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length && this.heap[leftIdx] < elem) {
        swapIdx = leftIdx;
      }

      if (
        rightIdx < length &&
        this.heap[rightIdx] < (swapIdx === null ? elem : this.heap[leftIdx])
      ) {
        swapIdx = rightIdx;
      }

      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }

    this.heap[idx] = elem;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]); // Sort events by start day
  const minHeap = new MinHeap();
  let i = 0,
    day = 1,
    attended = 0;
  const n = events.length;

  // We'll simulate days from 1 up to the latest ending event
  let maxDay = 0;
  for (let e of events) {
    maxDay = Math.max(maxDay, e[1]);
  }

  while (day <= maxDay) {
    // Add all events that start today
    while (i < n && events[i][0] === day) {
      minHeap.push(events[i][1]); //push end day
      i++;
    }

    // Remove all events that have already expired
    while (!minHeap.isEmpty() && minHeap.peek() < day) {
      minHeap.pop();
    }

    // Attend the event that ends earliest
    if (!minHeap.isEmpty()) {
      minHeap.pop();
      attended++;
    }

    day++;
  }

  return attended;
};
