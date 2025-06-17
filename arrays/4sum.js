// Title: 4sum
// LeetCode ID: 18
// Difficulty: Medium
// Tags: Array
// Two Pointers
// Sorting
// Date: 2025-06-16
// Link:https://leetcode.com/problems/4sum/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let a = 0; a < nums.length - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;

      let c = b + 1;
      let d = nums.length - 1;

      while (c < d) {
        let sum = nums[a] + nums[b] + nums[c] + nums[d];

        if (sum === target) {
          result.push([nums[a], nums[b], nums[c], nums[d]]);

          // Skip duplicates after pushing the result
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;

          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return result;
};
