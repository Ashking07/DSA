// Title: jump_game
// LeetCode ID: 55
// Difficulty: Medium
// Tags: Array
// Dynamic Programming
// Greedy
// Date: 2025-06-18
// Link: https://leetcode.com/problems/jump-game/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length - 1;
  let maxReach = 0;

  for (let i = 0; i <= maxReach; i++) {
    maxReach = Math.max(maxReach, i + nums[i]); //This step is recurring in greedy problems

    if (maxReach >= n) {
      return true;
    }
  }
  return false;
};
