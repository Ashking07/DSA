// Title: determine_whether_matrix_can_be_obtained_by_rotation
// LeetCode ID: 1886
// Difficulty: easy (just for the name, the solution although is based on the prev one, and is lenghty, but clever)
// Tags: array, matrix
// Date: 2025-06-05
// Link:https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  if (mat.length !== target.length) {
    return false;
  }

  //This function rotates the matrix 90 degrees once
  function rotate() {
    //First, Transpose the matrix diagonally
    for (let i = 0; i < mat.length; i++) {
      for (let j = i + 1; j < mat.length; j++) {
        let temp = mat[i][j];
        mat[i][j] = mat[j][i];
        mat[j][i] = temp;
      }
    }

    //Then reversing each row
    for (let i = 0; i < mat.length; i++) {
      let left = 0;
      let right = mat.length - 1;

      while (left < right) {
        let temp = mat[i][left];
        mat[i][left] = mat[i][right];
        mat[i][right] = temp;
        left++;
        right--;
      }
    }
  }

  function isEqual(mat1, mat2) {
    for (let i = 0; i < mat1.length; i++) {
      for (let j = 0; j < mat1.length; j++) {
        if (mat1[i][j] !== mat2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  for (let i = 0; i < 4; i++) {
    if (isEqual(mat, target)) {
      return true;
    }
    rotate();
  }
  return false;
};
