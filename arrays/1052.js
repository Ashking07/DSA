// Title: 1052. Grumpy Bookstore Owner
// LeetCode ID: 1052
// Difficulty: Medium
// Tags: Array, Sliding Window
// Date: 2025-09-16
// Link: https://leetcode.com/problems/grumpy-bookstore-owner/

//give code
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  const n = customers.length;
  let totalSatisfied = 0;

  // Calculate the base satisfaction without using the technique
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      totalSatisfied += customers[i];
    }
  }

  // Calculate the additional satisfaction we can get by using the technique
  let additionalSatisfied = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfied += customers[i];
    }
  }

  let maxAdditionalSatisfied = additionalSatisfied;

  // Use a sliding window to find the maximum additional satisfaction
  for (let i = minutes; i < n; i++) {
    if (grumpy[i] === 1) {
      additionalSatisfied += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      additionalSatisfied -= customers[i - minutes];
    }
    maxAdditionalSatisfied = Math.max(
      maxAdditionalSatisfied,
      additionalSatisfied
    );
  }

  return totalSatisfied + maxAdditionalSatisfied;
};
