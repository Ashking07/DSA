// Title: 1822. Sign of the Product of an Array
// LeetCode ID: 1822
// Difficulty: Easy
// Tags: Array
// Date: 2025-09-16
// Link: https://leetcode.com/problems/sign-of-the-product-of-an-array/

//give code
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1; // Initialize sign as positive

  for (let num of nums) {
    if (num === 0) {
      return 0; // If any number is zero, the product is zero
    } else if (num < 0) {
      sign = -sign; // Flip the sign for each negative number
    }
  }

  return sign; // Return the final sign
};
