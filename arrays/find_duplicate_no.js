// Title: Find Duplicate Number
// LeetCode ID:287
// Difficulty: Medium
// Tags:Array
// Two Pointers
// Binary Search
// Bit Manipulation
// Date: 2025-06-05
// Link:https://leetcode.com/problems/find-the-duplicate-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
};
