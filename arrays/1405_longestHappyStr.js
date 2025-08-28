// Title: _longestHappyStr
// LeetCode ID: 1405
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

var longestDiverseString = function (a, b, c) {
  // Build initial max heap
  let heap = [];
  if (a > 0) heap.push([a, "a"]);
  if (b > 0) heap.push([b, "b"]);
  if (c > 0) heap.push([c, "c"]);

  // simple max-heapify function
  const sortHeap = () => heap.sort((x, y) => y[0] - x[0]);

  let res = "";

  while (heap.length > 0) {
    sortHeap();
    let [count1, char1] = heap.shift(); // most frequent

    if (
      res.length >= 2 &&
      res[res.length - 1] === char1 &&
      res[res.length - 2] === char1
    ) {
      // can't use char1, so need second best
      if (heap.length === 0) break; // no alternative, stop
      let [count2, char2] = heap.shift();
      res += char2;
      if (--count2 > 0) heap.push([count2, char2]);
      heap.push([count1, char1]); // put char1 back
    } else {
      // safe to use char1 (up to 2 times)
      let use = Math.min(2, count1);
      if (res.length >= 1 && res[res.length - 1] === char1) use = 1;
      res += char1.repeat(use);
      count1 -= use;
      if (count1 > 0) heap.push([count1, char1]);
    }
  }

  return res;
};
