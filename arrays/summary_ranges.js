//A Good One!

// Title: summary_ranges
// LeetCode ID: 228
// Difficulty: Easy
// Tags: Array
// Date: 2025-06-08
// Link:https://leetcode.com/problems/summary-ranges/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    let last = nums[i];

    while (nums[i + 1] === nums[i] + 1) {
      last = nums[i + 1];
      i++;
    }
    if (start === last) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${last}`);
    }
  }

  return result;
};
