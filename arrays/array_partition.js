// Title: array_partition
// LeetCode ID: 561
// Difficulty: Easy
// Tags:Array
// Greedy
// Sorting
// Counting Sort
// Date: 2025-06-18
// Link: https://leetcode.com/problems/array-partition/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let n = nums.length;

  let i = 1;
  do {
    result += Math.min(nums[i - 1], nums[i]);
    i += 2;
  } while (i <= n);

  return result;
};
