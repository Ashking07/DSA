// Title: 624. Maximum Distance in Arrays
// LeetCode ID: 624
// Difficulty: Medium
// Tags: Array
// Date: 2025-09-16
// Link: https://leetcode.com/problems/maximum-distance-in-arrays/

//give code
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min1 = Infinity,
    min2 = Infinity;
  let max1 = -Infinity,
    max2 = -Infinity;

  for (const arr of arrays) {
    const first = arr[0];
    const last = arr[arr.length - 1];

    if (first < min1) {
      min2 = min1;
      min1 = first;
    } else if (first < min2) {
      min2 = first;
    }

    if (last > max1) {
      max2 = max1;
      max1 = last;
    } else if (last > max2) {
      max2 = last;
    }
  }

  return Math.max(max1 - min2, max2 - min1);
};
