// Title: Two Sum II - Input Array Is Sorted
// LeetCode ID: 167
// Difficulty: Easy
// Tags: Array, Binary Search, Two Pointers
// Date: 2025-10-04
// Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let res = [];

  let i = 1,
    j = numbers.length;

  while (i <= j) {
    let val = numbers[i - 1] + numbers[j - 1];
    if (val === target) {
      res.push(i);
      res.push(j);
      break;
    } else if (val < target) {
      i++;
    } else {
      j--;
    }
  }

  return res;
};
