// Title: neither_min_nor_max
// LeetCode ID: 2733
// Difficulty: Easy
// Tags: Array, sorting
// Date: 2025-06-11
// Link: https://leetcode.com/problems/neither-minimum-nor-maximum/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let newArr = Array.from(new Set(nums));
  newArr.sort((a, b) => a - b);

  if (newArr.length < 3) {
    return -1;
  }

  return newArr[1];
};
