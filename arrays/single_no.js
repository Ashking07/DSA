// Title: Single Number
// LeetCode ID: 136
// Difficulty: Easy
// Tags: Array
// Bit Manipulation
// Date: 2025-06-05
// Link:https://leetcode.com/problems/single-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};

  for (let num of nums) {
    if (map.hasOwnProperty(num)) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      return Number(key);
    }
  }
  return 0;
};
