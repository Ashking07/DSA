// Title: sort_colours
// LeetCode ID: 75
// Difficulty: Medium
// Tags: Array
// Two Pointers
// Sorting
// Date: 2025-06-29
// Link: https://leetcode.com/problems/sort-colors/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // nums.sort((a,b)=> a- b)

  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    } else {
      two++;
    }
  }

  // Overwrite the array in-place
  let index = 0;

  for (let i = 0; i < zero; i++) {
    nums[index++] = 0;
  }
  for (let i = 0; i < one; i++) {
    nums[index] = 1;
    index++;
  }
  for (let i = 0; i < two; i++) {
    nums[index] = 2;
    index = index + 1;
  }
};
