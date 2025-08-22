// Title: _putMarbelsInBag
// LeetCode ID: 2551
// Difficulty: Hard
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems/put-marbles-in-bags/description/

/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  let n = weights.length;

  let pairSums = [];

  for (let i = 0; i < n - 1; i++) {
    pairSums.push(weights[i] + weights[i + 1]);
  }

  pairSums.sort((a, b) => a - b);

  let minScore = 0;
  let maxScore = 0;

  for (let i = 0; i < k - 1; i++) {
    minScore += pairSums[i];
  }
  for (let i = 0; i < k - 1; i++) {
    maxScore += pairSums[pairSums.length - 1 - i];
  }

  return maxScore - minScore;
};
