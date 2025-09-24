// Title: Removing Minimum and Maximum From Array
// LeetCode ID: 2091
// Difficulty: Medium
// Tags: Array
// Date: 2025-09-16
// Link: https://leetcode.com/problems/removing-minimum-and-maximum-from-array/

//give code
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length;
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  const left = Math.min(minIndex, maxIndex) + 1;
  const right = n - Math.max(minIndex, maxIndex);
  const bothSides =
    Math.min(minIndex, maxIndex) + 1 + n - Math.max(minIndex, maxIndex);

  return Math.min(left, right, bothSides);
};
