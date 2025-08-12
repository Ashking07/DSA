// Title: 238_ProductArrExceptSelf
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function calculatePrefixPro(nums) {
  let array = new Array(nums.length);
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    array[i] = product;
    product = product * nums[i];
  }

  return array;
}
function calculateSuffixPro(nums) {
  let array = [];
  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    array[i] = product;
    product = product * nums[i];
  }
  return array;
}
var productExceptSelf = function (nums) {
  let prefixProducts = calculatePrefixPro(nums);
  let suffixProducts = calculateSuffixPro(nums);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefixProducts[i] * suffixProducts[i];
  }

  return result;
};
