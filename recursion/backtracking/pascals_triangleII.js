// Title: pascals_triangleII
// LeetCode ID: 119
// Difficulty: Easy
// Tags: Array, DP
// Date: 2025-06-26
// Link: https://leetcode.com/problems/pascals-triangle-ii/description/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [[1]];
  let max = rowIndex;
  function addAdjAndPushInMid(temp) {
    if (max === 0) return;

    let newRow = [1];

    for (let i = 0; i < temp.length - 1; i++) {
      let sum = temp[i] + temp[i + 1];
      newRow.push(sum);
    }

    newRow.push(1);
    result.push(newRow);
    max--;
    addAdjAndPushInMid(newRow);
  }

  addAdjAndPushInMid([1]);
  return result[result.length - 1];
};
