// Title: Find the Middle Index in Array
// LeetCode ID: 1991
// Difficulty: Easy
// Tags: Array
// Date: 2025-09-16
// Link: https://leetcode.com/problems/find-the-middle-index-in-array/

//Give solution for this sum of array problem
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};
