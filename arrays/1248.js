// Title: -
// LeetCode ID: 1248
// Difficulty:
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i] % 2 === 0 ? 0 : 1;
  }

  let prefix = 0;
  let countMap = new Map();
  countMap.set(0, 1); // base case
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i];

    if (countMap.has(prefix - k)) {
      res += countMap.get(prefix - k);
    }

    countMap.set(prefix, (countMap.get(prefix) || 0) + 1);
  }

  return res;
};
