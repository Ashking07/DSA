// Title: Find Subsequence of Length K With the Largest Sum
// LeetCode ID:  2099
// Difficulty:Easy
// Tags:Array
// Hash Table
// Sorting
// Heap (Priority Queue)
// Date: 2025-07-12
// Link: https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/?envType=problem-list-v2&envId=heap-priority-queue

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  let paired = nums.map((num, idx) => [num, idx]);

  paired.sort((a, b) => b[0] - a[0]);

  let topK = paired.slice(0, k);

  topK.sort((a, b) => a[1] - b[1]);

  return topK.map((pair) => pair[0]);
};
