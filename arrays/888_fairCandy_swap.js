// Title: _fairCandy_swap
// LeetCode ID: 888
// Difficulty: Easy
// Tags: Array
// Hash Table
// Binary Search
// Sorting
// Weekly Contest 98
// Date: 2025-07-30
// Link:https://leetcode.com/problems/fair-candy-swap/description/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((acc, val) => acc + val, 0);
  const sumB = bobSizes.reduce((acc, val) => acc + val, 0);

  const diff = (sumB - sumA) / 2;

  const bobSet = new Set(bobSizes);

  for (let x of aliceSizes) {
    const y = x + diff;
    if (bobSet.has(y)) {
      return [x, y];
    }
  }

  return []; // Fallback
};
