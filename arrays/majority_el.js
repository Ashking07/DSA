// Title: Majority Element
// LeetCode ID: 169
// Difficulty: Easy
// Tags: Array
// Hash Table
// Divide and Conquer
// Sorting
// Counting
// Date: 2025-06-05
// Link: https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  let mid = n / 2;

  let map = {};

  for (num of nums) {
    if (map.hasOwnProperty(num)) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }

  for (num of nums) {
    if (map[num] > mid) {
      return num;
    }
  }
  return 0;
};
