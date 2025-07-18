// Title: longest_palindrone_substring
// LeetCode ID: 5
// Difficulty:Medium
// Tags: DP, String,Two pointers
// Date: 2025-07-12
// Link: https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      left--; //This will go to left side
      right++; //This will go to right side
    }

    let palindromeSub = s.slice(left + 1, right);
    if (palindromeSub.length > result.length) {
      result = palindromeSub;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); //For Odd length palindromes
    expandAroundCenter(i, i + 1); //For Even length palindromes
  }

  return result;
};
