// Title: Missing Number
// LeetCode ID: 268
// Difficulty: Easy
// Tags:Array
// Hash Table
// Math
// Binary Search
// Bit Manipulation
// Sorting
// Date: 2025-06-05
// Link:https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;

  const map = {};
  for (let i = 0; i <= n; i++) {
    map[i] = false;
  }
  for (let num of nums) {
    if (map.hasOwnProperty(num)) {
      map[num] = true;
    }
  }

  for (let key in map) {
    if (!map[key]) {
      return Number(key);
    }
  }
  return 0;
};
