// Title: sum_of_sq_no
// LeetCode ID:633
// Difficulty: Medium
// Tags: Math
// Two Pointers
// Binary Search
// Date: 2025-06-05
// Link: https://leetcode.com/problems/sum-of-square-numbers/description/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    let bSquared = c - a * a;
    let b = Math.sqrt(bSquared);
    if (Number.isInteger(b)) {
      return true;
    }
  }
  return false;
};
