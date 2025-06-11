// Title: third_max_no
// LeetCode ID: 414
// Difficulty: easy
// Tags: array, sorting
// Date: 2025-06-11
// Link: https://leetcode.com/problems/third-maximum-number/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max = 0;

  let newArr = Array.from(new Set(nums));
  newArr.sort((a, b) => b - a);

  if (newArr.length < 3) {
    max = Math.max(...newArr);
    return max;
  }

  max = newArr[2];

  return max;
};
