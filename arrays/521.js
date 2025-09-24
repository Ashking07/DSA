// Title: Longest Uncommon Subsequence II
// LeetCode ID: 521
// Difficulty: Easy
// Tags: Strings, Dynamic Programming
// Date: 2025-09-16
// Link: https://leetcode.com/problems/longest-uncommon-subsequence-ii/

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let arr = s.split("");
  let arrPower = [];

  for (let i = 0; i < arr.length; i++) {
    let max = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        max++;
      } else {
        break;
      }
    }
    arrPower[i] = max;
  }

  return Math.max(...arrPower);
};
