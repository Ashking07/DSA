// Title: Detect Capital
// LeetCode ID: 520
// Difficulty: Easy
// Tags: String
// Date: 2025-09-16
// Link: https://leetcode.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let firstCheck = word[0] === word[0].toUpperCase();
  let secondCheck =
    word.slice(1) === word.slice(1).toUpperCase() ||
    word.slice(1) === word.slice(1).toLowerCase();

  return word === word.toLowerCase() || (firstCheck && secondCheck);
};
