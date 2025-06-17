// Title: 4sumII
// LeetCode ID: 454
// Difficulty: Medium
// Tags: Array, HashTable
// Date: 2025-06-17
// Link:https://leetcode.com/problems/4sum-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  let map = {};

  //Storing the all the combination sums from nums1 and nums2 with their frequencies
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j];
      map[sum] = (map[sum] || 0) + 1;
    }
  }

  //Then calculating each combinations sum from nums3 and nums4 and checking it against the map to see
  // if these sums have their complement counterparts and in how much frequencies, as we go by - increasing the count variable
  for (let l = 0; l < nums3.length; l++) {
    for (let m = 0; m < nums4.length; m++) {
      target = -(nums3[l] + nums4[m]);
      if (map.hasOwnProperty(target)) {
        count += map[target];
      }
    }
  }

  return count;
};
