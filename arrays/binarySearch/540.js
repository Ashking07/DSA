// Title: Single Element in a Sorted Array
// LeetCode ID: 540
// Difficulty: Medium
// Tags: Array, Binary Search
// Date: 2025-10-13
// Link: https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let res = 0;
  let found = false;

  let i = 1;
  while (i < nums.length) {
    let prev = nums[i - 1];

    if (nums[i] !== prev) {
      res = prev;
      found = true;
      break;
    }

    if (i + 2 > nums.length) return nums[nums.length - 1];
    i += 2;
  }

  if (!found) {
    return nums[nums.length - 1];
  }

  return res;
};

// logN solution! Perfect intution!!!

// var singleNonDuplicate = function(nums) {
//     let l = 0, r = nums.length - 1, n = nums.length
//     while(l<r){
//         const mid = l + Math.floor((r-l)/2);
//         if(nums[mid] == nums[mid-1]){
//             const leftLen = mid - 1
//             const rightLen = n - mid + 1
//             if(leftLen % 2 !== 0){
//                 r = mid - 2
//             }else {
//                 l = mid + 1
//             }
//         }
//         else if(nums[mid] == nums[mid+1]){
//             const leftLen = mid
//             const rightLen = n - mid + 2
//             if(leftLen % 2 == 0){
//                 l = mid + 2
//             }else {
//                 r = mid - 1
//             }
//         } else return nums[mid]
//     }
//     return nums[l]
// };
