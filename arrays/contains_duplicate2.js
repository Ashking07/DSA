// Title: Contains Duplicate II
// LeetCode ID: 219
// Difficulty: Easy
// Tags: Array, Hash Table, Sliding Window
// Date: 2025-06-05
// Link: https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      if (i - map[nums[i]] <= k) {
        return true;
      }
    }
    map[nums[i]] = i;
  }
  return false;
};

//SLIDING WINDOW SOLUTION - Understand this!
// var containsNearbyDuplicate = function(nums, k) {
//     let seen = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         if (seen.has(nums[i])) return true;

//         seen.add(nums[i]);

//         // Remove element that is more than k steps behind
//         if (seen.size > k) {
//             seen.delete(nums[i - k]);
//         }
//     }

//     return false;
// };
