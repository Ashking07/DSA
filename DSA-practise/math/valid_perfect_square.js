// Problem: LeetCode #367 - Valid Perfect Square
// Difficulty: Easy
// Topic: Math,Binary Search, Brute Force
// Link: https://leetcode.com/problems/valid-perfect-square/description/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 0) return 0;
  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === num) {
      return true; //Here will return 'mid' if wanted the perfect square integer
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false; //Here will return 'right' if wanted the un-perfect square integer
};
