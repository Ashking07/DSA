// Title: combination_sum
// LeetCode ID: 39
// Difficulty: Medium
// Tags: Array, Backtracking
// Date: 2025-06-10
// Link: https://leetcode.com/problems/combination-sum/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  function backTrack(curr, i, sum) {
    if (sum === target) {
      result.push([...curr]);
      return;
    } else if (sum > target) {
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      curr.push(candidates[j]);
      backTrack(curr, j, sum + candidates[j]);
      curr.pop();
    }
  }

  backTrack([], 0, 0);
  return result;
};
