// Title: Find Target Indices After Sorting Array
// LeetCode ID: 2089
// Difficulty: Easy
// Tags: Array, Sorting
// Date: 2025-10-03
// Link: https://leetcode.com/problems/find-target-indices-after-sorting-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      let l = mid,
        r = mid + 1;
      while (l >= 0 && nums[l] === target) {
        res.push(l);
        l--;
      }
      while (r < nums.length && nums[r] === target) {
        res.push(r);
        r++;
      }
      break;
    }
  }

  return res.sort((a, b) => a - b);
};
