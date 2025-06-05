// Title: rotate_img
// LeetCode ID: 48
// Difficulty: Medium
// Tags: Array, Math, Two Pointer, Matrix
// Date: 2025-06-05
// Link: https://leetcode.com/problems/rotate-image/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;

  //First transposing the matrix diagonally
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //Then reversing each row
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;

    while (left < right) {
      let temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
};
