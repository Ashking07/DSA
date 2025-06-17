// Title: next_greater_el_II
// LeetCode ID: 503
// Difficulty: Medium
// Tags: Array
// Stack
// Monotonic Stack
// Date: 2025-06-15
// Link:https://leetcode.com/problems/next-greater-element-ii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let n = nums.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let start = i;
    let j = start;
    let pushed = false;

    do {
      if (nums[j] > nums[i]) {
        result.push(nums[j]);
        pushed = true;
        break;
      }

      j = (j + 1) % n;
    } while (j !== start);
    if (!pushed) result.push(-1);
  }

  return result;
};

//EFFICIENT SOL BELOW

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var nextGreaterElements = function(nums) {
//     const n = nums.length;
//     const result = new Array(n).fill(-1); // Default: no greater element
//     const stack = []; // Store indices of potential "next greater" elements

//     // Loop from 2n - 1 down to 0 to simulate circular array
//     for (let i = 2 * n - 1; i >= 0; i--) {
//         const circularIndex = i % n;

//         // Maintain monotonic decreasing stack
//         while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[circularIndex]) {
//             stack.pop(); // Pop smaller or equal elements
//         }

//         // If we’re in the original array range, assign result
//         if (i < n) {
//             if (stack.length > 0) {
//                 result[circularIndex] = nums[stack[stack.length - 1]];
//             }
//         }

//         // Push current index onto the stack
//         stack.push(circularIndex);
//     }

//     return result;
// };
