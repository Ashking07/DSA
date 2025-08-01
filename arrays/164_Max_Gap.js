// Title: _Max_Gap
// LeetCode ID: 164
// Difficulty: Medium
// Tags:Array
// Sorting
// Bucket Sort
// Radix Sort
// Date: 2025-08-01
// Link:https://leetcode.com/problems/maximum-gap/description/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  let maxDiff = 0;
  if (nums.length === 1) return 0;

  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
};
