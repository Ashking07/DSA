// Title: Next Greater Element I
// LeetCode ID: 496
// Difficulty: Easy
// Tags: Array, HashTable, Stack, Monotonic Stack
// Date: 2025-06-13
// Link: https://leetcode.com/problems/next-greater-element-i/description/?envType=problem-list-v2&envId=array

//SUCH ELEGANT SOLUTION BY MYSELF, HAPPY 😄
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }

  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    let pushed = false;
    for (let j = map.get(nums1[i]); j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        pushed = true;
        break;
      }
    }
    if (!pushed) result.push(-1);
  }

  return result;
};
