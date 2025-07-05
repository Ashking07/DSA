// Title: find_triangular_sum_of_an_array
// LeetCode ID: 2221
// Difficulty: Medium
// Tags: Array
// Math
// Simulation
// Combinatorics
// Date: 2025-06-26
// Link: https://leetcode.com/problems/find-triangular-sum-of-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  if (nums.length === 1) return nums[0];
  let result = 0;
  let max = nums.length - 1;

  function addAdjAndAddInMid(temp) {
    if (max === 0) return;

    let newArr = [];

    for (let i = 0; i < temp.length; i++) {
      let sum = temp[i] + temp[i + 1];
      let lastDigit = sum % 10;
      newArr.push(lastDigit);
    }
    result = newArr;
    max--;
    addAdjAndAddInMid(newArr);
  }

  addAdjAndAddInMid(nums);
  return result[0];
};
