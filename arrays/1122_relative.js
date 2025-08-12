// Title:Relative sort arr
// LeetCode ID: 1122
// Difficulty:Easy
// Tags: Array
// Hash Table
// Sorting
// Counting Sort
// Weekly Contest 145
// Date: 2025-08-12
// Link: https://leetcode.com/problems/relative-sort-array/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let freqMap = {};
  let result = [];

  // Step 1: Build frequency map for arr1
  for (let num of arr1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Add elements from arr2 in order
  for (let num of arr2) {
    while (freqMap[num] > 0) {
      result.push(num);
      freqMap[num]--;
    }
  }

  // Step 3: Handle remaining elements not in arr2
  let remaining = [];
  for (let num in freqMap) {
    while (freqMap[num] > 0) {
      remaining.push(Number(num));
      freqMap[num]--;
    }
  }

  // Step 4: Sort remaining elements and append
  remaining.sort((a, b) => a - b);
  result.push(...remaining);

  return result;
};
