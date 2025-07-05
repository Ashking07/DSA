// Title: permutations
// LeetCode ID: 46
// Difficulty: Medium
// Tags: Backtracking
// Date: 2025-06-23
// Link: https://leetcode.com/problems/permutations/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = new Set();

  function backTrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used.has(nums[i])) {
        path.push(nums[i]);

        used.add(nums[i]);
        backTrack(path);
        used.delete(nums[i]);

        path.pop();
      }
    }
  }

  backTrack([]);
  return result;
};
