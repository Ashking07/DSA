// Title: _findPeak_El
// LeetCode ID: 162
// Difficulty: Medium
// Tags: Array, Binary Search
// Date: 2025-07-25
// Link:https://leetcode.com/problems/find-peak-element/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  //RECURSIVE SOLUTION - original
  // function findPeak(start,end){
  // if(start === end) return start

  // let mid = Math.floor((start + end) / 2)

  // if(nums[mid] > nums[mid+1]){
  //     return findPeak(start,mid)
  // }else{
  //     return findPeak(mid + 1,end)
  //   }
  // }

  // return findPeak(0,nums.length - 1)

  //BINARY SEARCH SOLUTION
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
