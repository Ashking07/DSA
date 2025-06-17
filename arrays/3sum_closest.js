// Title: 3sum_closest
// LeetCode ID: 16
// Difficulty: Medium
// Tags: Array
// Two Pointers
// Sorting
// Date: 2025-06-16
// Link:https://leetcode.com/problems/3sum-closest/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); // Sort array for two-pointer technique

  let closest = 0;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let x = 0;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      distBetweenTargetAndSum = Math.abs(target - sum);

      if (distBetweenTargetAndSum < minDiff) {
        minDiff = distBetweenTargetAndSum;
        closest = sum;
      }

      if (sum < target) left++;
      else right--;
    }
  }
  return closest;
};
