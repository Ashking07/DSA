// Title: combination_sum_2
// LeetCode ID: 40
// Difficulty: Medium
// Tags: Array, Backtracking
// Date: 2025-06-12
// Link: https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];

  function backTrack(temp, i, sum) {
    if (sum === target) {
      result.push([...temp]);
      return;
    } else if (sum > target) {
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      // 💡 Skip duplicates at the same level
      if (j > i && candidates[j] === candidates[j - 1]) continue;

      // Push candidate[j] to temp, recurse, then pop
      temp.push(candidates[j]);
      backTrack(temp, j + 1, sum + candidates[j]);
      temp.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  backTrack([], 0, 0);
  return result;
};

// Input:
// candidates = [10, 1, 2, 7, 6, 1, 5]
// target = 8

// []
// ├── [1] (sum = 1, j = 0)
// │   ├── [1, 1] (sum = 2, j = 1)
// │   │   ├── [1, 1, 2] (sum = 4, j = 2)
// │   │   │   ├── [1, 1, 2, 5] (sum = 9) ❌
// │   │   ├── [1, 1, 5] (sum = 7, j = 3)
// │   │   │   ├── [1, 1, 5, 6] (sum = 13) ❌
// │   │   ├── [1, 1, 6] ✅ (sum = 8, j = 4) ✅
// │   │   └── [1, 1, 7] (sum = 9) ❌
// │
// │   ├── [1, 2] (sum = 3, j = 2)
// │   │   ├── [1, 2, 5] ✅ (sum = 8, j = 3) ✅
// │   │   ├── [1, 2, 6] (sum = 9) ❌
// │
// │   ├── [1, 5] (sum = 6, j = 3)
// │   │   ├── [1, 5, 6] (sum = 12) ❌
// │   │   ├── [1, 5, 7] (sum = 13) ❌
// │
// │   ├── [1, 6] ✅ (sum = 7, j = 4)
// │   ├── [1, 7] ✅ (sum = 8, j = 5) ✅
// │   └── [1, 10] (sum = 11) ❌
// │
// ├── [2] (sum = 2, j = 2)
// │   ├── [2, 5] ✅ (sum = 7)
// │   ├── [2, 6] ✅ (sum = 8) ✅
// │   └── [2, 7] (sum = 9) ❌
// │
// ├── [5] (sum = 5, j = 3)
// │   └── [5, 6] (sum = 11) ❌
// │   └── [5, 2] (not allowed due to j > i) 🚫
// │
// ├── [6] (sum = 6, j = 4)
// │   └── [6, 2], [6, 1], etc. not allowed
// │
// ├── [7] ✅ (sum = 7, j = 5)
// │   └── [7, 1] (not allowed)
// │
// └── [10] (sum = 10) ❌
