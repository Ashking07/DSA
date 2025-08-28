// Title: 769
// LeetCode ID: 769
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let maxEl = 0;
  let chunks = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEl = Math.max(maxEl, arr[i]);

    if (maxEl === i) {
      chunks++;
    }
  }

  return chunks;
};
