// Title: _TruncateSentence
// LeetCode ID: 1816
// Difficulty: Easy
// Tags: Array,Strings
// Date: 2025-08-22
// Link:https://leetcode.com/problems/truncate-sentence/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let res = "";
  let count = 0;

  while (count < k) {
    res += `${arr[count]} `;
    count++;
  }

  return res.trim();
};
