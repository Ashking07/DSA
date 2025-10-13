// Title: Find Right Interval
// LeetCode ID: 436
// Difficulty: Medium
// Tags: Array, Binary Search, Sort
// Date: 2025-10-13
// Link: https://leetcode.com/problems/find-right-interval/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const n = intervals.length;

  // keep original indices, and sort by start
  const starts = intervals
    .map((iv, i) => [iv[0], i])
    .sort((a, b) => a[0] - b[0]);

  let res = [];

  for (let i = 0; i < n; i++) {
    let left = 0,
      right = n - 1;
    let target = intervals[i][1];
    let idx = -1; // default if none found

    // lower_bound: first start >= target
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (starts[mid][0] >= target) {
        idx = starts[mid][1]; // original index
        right = mid - 1; // try to find an even smaller start
      } else {
        left = mid + 1;
      }
    }
    res.push(idx);
  }

  return res;
};
