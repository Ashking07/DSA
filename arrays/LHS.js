// Title:Longest Harmonious Subsequence
// LeetCode ID: 594
// Difficulty: Easy
// Tags:Array
// Hash Table
// Sliding Window
// Sorting
// Counting
// Date: 2025-06-29
// Link: https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = {};
  nums.sort((a, b) => a - b);

  for (num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let keys = Object.keys(map)
    .map(Number)
    .sort((a, b) => a - b);
  // converts object keys (which are strings) into numbers and sorts them in ascending order.
  // This ensures you can safely perform math-based logic like checking consecutive keys

  let max = 0;

  for (let i = 0; i < keys.length - 1; i++) {
    let curr = keys[i];
    let next = keys[i + 1];

    if (next - curr === 1) {
      let totalFreq = map[curr] + map[next];
      max = Math.max(max, totalFreq);
    }
  }

  return max;
};
