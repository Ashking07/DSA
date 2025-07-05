// Title: pascals_triangle
// LeetCode ID:118
// Difficulty: easy
// Tags: Array, DP
// Date: 2025-06-26
// Link:https://leetcode.com/problems/pascals-triangle/description/?envType=problem-list-v2&envId=array

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // let result = []
  // let max = numRows

  // function addAdjAndPlaceInMid(temp){
  //     if(max === 0) return
  //     let i = 0;

  //     while (i < temp.length - 1) {
  //     let sum = temp[i] + temp[i + 1];
  //     temp.splice(i + 1, 0, sum);
  //     i += 2;
  //     }

  //     result.push(temp)
  //     max--
  //     addAdjAndPlaceInMid(temp)
  // }

  // addAdjAndPlaceInMid([1,1])
  // return result

  let result = [];

  for (let i = 0; i < numRows; i++) {
    let newRow = [1];

    let temp = result.length > 0 ? result[result.length - 1] : [];

    let j = 0;
    while (j < temp.length - 1) {
      let sum = temp[j] + temp[j + 1];
      newRow.push(sum);
      j += 1;
    }

    if (i > 0) {
      newRow.push(1);
    }

    result.push(newRow);
  }

  return result;
};
