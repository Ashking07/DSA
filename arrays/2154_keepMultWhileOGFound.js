// Title: _keepMultWhileOGFound
// LeetCode ID: 2154
// Difficulty: Easy
// Tags:Array
// Hash Table
// Sorting
// Simulation
// Weekly Contest 278
// Date: 2025-08-01
// Link: https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let OGNum = original;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === OGNum) {
      OGNum = nums[i] * 2;
    }
  }

  return OGNum;
};
