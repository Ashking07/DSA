// Title: jump_gameII
// LeetCode ID: 45
// Difficulty: Medium
// Tags:Array
// Dynamic Programming
// Greedy
// Date: 2025-06-19
// Link: https://leetcode.com/problems/jump-game-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length - 1;
  let maxReach = 0;
  let step = 0;
  let end = 0;

  for (let i = 0; i < n; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === end) {
      step++;
      end = maxReach;
    }
  }

  return step;
};
