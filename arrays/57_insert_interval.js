// Title:_insert_interval.js
// LeetCode ID:  57
// Difficulty: Medium
// Tags: Array
// Date: 2025-07-25
// Link:https://leetcode.com/problems/insert-interval/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let resultArr = [];
  let [newStart, newEnd] = newInterval;
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];

    if (end < newStart) {
      resultArr.push(intervals[i]);
    } else if (start > newEnd) {
      if (!inserted) {
        resultArr.push([newStart, newEnd]);
        inserted = true;
      }
      resultArr.push(intervals[i]);
    } else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  }

  if (!inserted) {
    resultArr.push([newStart, newEnd]);
  }

  return resultArr;
};
