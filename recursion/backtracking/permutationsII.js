// Title: permutationsII
// LeetCode ID:47
// Difficulty: Medium
// Tags: Array
// Backtracking
// Sorting
// Date: 2025-06-23
// Link: https://leetcode.com/problems/permutations-ii/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let used = new Array(nums.length).fill(false);
  let result = [];

  function backTrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(nums[i]);

      backTrack(path);

      used[i] = false;
      path.pop();
    }
  }

  backTrack([]);
  return result;
};
