// Title: 4_Median2SortedArr
// LeetCode ID: 4
// Difficulty: Hard
// Tags:
// Date: 2025-08-22
// Link:https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = [];
  let i = 0,
    j = 0;

  // merge two sorted arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      newArr.push(nums1[i]);
      i++;
    } else {
      newArr.push(nums2[j]);
      j++;
    }
  }

  // add remaining elements
  while (i < nums1.length) newArr.push(nums1[i++]);
  while (j < nums2.length) newArr.push(nums2[j++]);

  let n = newArr.length;
  let mid = Math.floor(n / 2);

  if (n % 2 === 1) {
    return newArr[mid]; // odd length
  } else {
    return (newArr[mid - 1] + newArr[mid]) / 2; // even length
  }
};
