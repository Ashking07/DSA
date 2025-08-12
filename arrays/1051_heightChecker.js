// Title: 1051_heightChecker
// LeetCode ID: 1051
// Difficulty: Easy
// Tags:Array
// Sorting
// Counting Sort
// Weekly Contest 138
// Date: 2025-08-12
// Link:https://leetcode.com/problems/height-checker/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let originalHeight = [...heights];
  let sortedHeight = originalHeight.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeight[i]) {
      count++;
    }
  }

  return count;
};
