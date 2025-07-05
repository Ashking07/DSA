// Title: search_in_rotated_sorted_array
// LeetCode ID: 33
// Difficulty: Medium
// Tags: Array
// Binary Search
// Date: 2025-06-24
// Link:https://leetcode.com/problems/search-in-rotated-sorted-array/?envType=problem-list-v2&envId=array

//My SOLUTION
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  nums.sort((a, b) => a - b);

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return map[nums[mid]];
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

//Optimal chatGPT sol
// var search = function(nums, target) {
//     let left = 0, right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) return mid;

//         // Check if left half is sorted
//         if (nums[left] <= nums[mid]) {
//             // Target lies within the left half
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//         // Otherwise, right half is sorted
//         else {
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

//     return -1;
// };
