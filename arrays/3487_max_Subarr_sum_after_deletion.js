// Title: _max_Subarr_sum_after_deletion
// LeetCode ID: 3487
// Difficulty: Easy
// Tags:Array
// Hash Table
// Greedy
// Weekly Contest 441
// Date: 2025-07-27
// Link:https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/description/?envType=daily-question&envId=2025-07-25

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSum = function (nums) {
  if (Math.max(...nums) < 0) return Math.max(...nums);

  let mySet = new Set(nums);

  let result = 0;

  for (const num of mySet) {
    if (num >= 0) {
      result += num;
    }
  }

  return result;
};
