// Title: _monotonic_arr
// LeetCode ID: 896
// Difficulty: Easy
// Tags: Array, Weekly Contest 100
// Date: 2025-07-28
// Link: https://leetcode.com/problems/monotonic-array/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isMonotonous = true;

  function isIncreasingMono(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] >= arr[i]) {
        continue;
      } else {
        isMonotonous = false;
        break;
      }
    }
  }
  function isDecreasingMono(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] <= arr[i]) {
        continue;
      } else {
        isMonotonous = false;
        break;
      }
    }
  }

  let i = 0;
  let j = 1;
  if (nums[i] === nums[j]) {
    while (nums[i] === nums[j] && j < nums.length - 1) {
      i++;
      j++;
    }
  }

  if (j === nums.length) return true; // all elements are equal
  if (nums[i] < nums[j]) {
    isIncreasingMono(nums);
  } else if (nums[i] > nums[j]) {
    isDecreasingMono(nums);
  }

  return isMonotonous;
};
