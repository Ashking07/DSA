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

// []
// ├── [2] (sum = 2)
// │   ├── [2, 2] (sum = 4)
// │   │   ├── [2, 2, 2] (sum = 6)
// │   │   │   ├── [2, 2, 2, 2] (sum = 8) ✅
// │   │   │   └── [2, 2, 2, 3] (sum = 9) ❌
// │   │   │   └── [2, 2, 2, 5] (sum = 11) ❌
// │   │   ├── [2, 2, 3] (sum = 7)
// │   │   │   ├── [2, 2, 3, 3] (sum = 10) ❌
// │   │   │   └── [2, 2, 3, 5] (sum = 12) ❌
// │   │   ├── [2, 2, 5] (sum = 9) ❌
// │   ├── [2, 3] (sum = 5)
// │   │   ├── [2, 3, 3] (sum = 8) ✅
// │   │   ├── [2, 3, 5] (sum = 10) ❌
// │   ├── [2, 5] (sum = 7)
// │   │   ├── [2, 5, 5] (sum = 12) ❌
// ├── [3] (sum = 3)
// │   ├── [3, 3] (sum = 6)
// │   │   ├── [3, 3, 3] (sum = 9) ❌
// │   │   ├── [3, 3, 2] ❌ (not allowed due to j = i rule)
// │   │   └── [3, 3, 5] (sum = 11) ❌
// │   ├── [3, 5] (sum = 8) ✅
// ├── [5] (sum = 5)
// │   ├── [5, 5] (sum = 10) ❌
// │   ├── [5, 3] ❌ (not allowed, due to i <= j)
// │   └── [5, 2] ❌ (not allowed)
