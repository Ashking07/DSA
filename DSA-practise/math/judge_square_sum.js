// Problem: LeetCode #633 - Sum of Square Numbers
// Difficulty: Medium
// Topic: Math, Two Pointer, Binary Search, Brute Force
// Link: https://leetcode.com/problems/sum-of-square-numbers/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    let bSquared = c - a * a;
    let b = Math.sqrt(bSquared);
    if (Number.isInteger(b)) {
      return true;
 