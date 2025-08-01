// Title: _largest_number
// LeetCode ID: 179
// Difficulty: Medium
// Tags:Array
// String
// Greedy
// Sorting
// Date: 2025-08-01
// Link: https://leetcode.com/problems/largest-number/description/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let str1 = "" + a + b;
    let str2 = "" + b + a;
    return str2.localeCompare(str1);
  });

  // Edge case: if the largest number is '0', return just '0'
  if (nums[0] === 0) return "0";

  return nums.join("");
};
