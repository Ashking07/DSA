// Title: merge_intervals
// LeetCode ID: 56
// Difficulty: Medium
// Tags: Array, sorting
// Date: 2025-06-30
// Link:https://leetcode.com/problems/merge-intervals/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = result[result.length - 1];
    let current = intervals[i];

    if (lastInterval[1] >= current[0]) {
      if (current[1] > lastInterval[1]) {
        lastInterval[1] = current[1];
      }
    } else {
      result.push(current);
    }
  }

  return result;
};
