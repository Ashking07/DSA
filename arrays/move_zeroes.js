// Title: move_zeroes
// LeetCode ID: 283
// Difficulty: Easy
// Tags: Arrays, 2 pointer
// Date: 2025-06-06
// Link: https://leetcode.com/problems/move-zeroes/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroInteger = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[lastNonZeroInteger];
      nums[lastNonZeroInteger] = temp;
      lastNonZeroInteger++;
    }
  }
};
