// Title: max_count_pos_neg_ints
// LeetCode ID: 2529
// Difficulty: Easy
// Tags: Array,Binary Search,Counting
// Date: 2025-06-09
// Link: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) i++;
    if (Math.sign(nums[i]) === 1) {
      pos++;
    } else if (Math.sign(nums[i]) === -1) {
      neg++;
    }
  }

  return Math.max(pos, neg);
};

// Below, Each function: O(log n) → total: O(log n)

// 💡 Pattern
// This is a great example of:

// 📘 Modified Binary Search for boundaries — finding the first or last occurrence or transition point in sorted arrays.

// var maximumCount = function(nums) {
//     function countNegatives(nums) {
//         let start = 0;
//         let end = nums.length - 1;
//         while (start <= end) {
//             let mid = Math.floor((start + end) / 2);
//             if (nums[mid] < 0) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }
//         return start;
//     }

//     function countPositives(nums) {
//         let start = 0;
//         let end = nums.length - 1;
//         while (start <= end) {
//             let mid = Math.floor((start + end) / 2);
//             if (nums[mid] > 0) {
//                 end = mid - 1;
//             } else {
//                 start = mid + 1;
//             }
//         }
//         return nums.length - start;
//     }

//     return Math.max(countNegatives(nums), countPositives(nums));
// };
