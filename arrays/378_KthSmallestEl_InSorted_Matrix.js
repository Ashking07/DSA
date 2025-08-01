// Title: _KthSmallestEl_InSorted_Matrix
// LeetCode ID: 378
// Difficulty: Medium
// Tags:Array,Matrix
// Date: 2025-08-01
// Link: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/?envType=problem-list-v2&envId=sorting

// /**
//  * @param {number[][]} matrix
//  * @param {number} k
//  * @return {number}
//  */
// var kthSmallest = function(matrix, k) {
//     let n = matrix.length
//     if(n === 1) return matrix[0][0]
//     let rowLen = matrix[0].length

//     let totalEl = n * rowLen

//     let row = 0
//     let x = 0
//     while(x !== k){
//         row++
//         for(let i = 0; i < rowLen; i++){
//             if(x === k){
//                 break
//             }
//             x++
//         }
//     }

//     return matrix[row][row-x]

// };

var kthSmallest = function (matrix, k) {
  let flat = matrix.flat(); // Flatten the 2D array
  flat.sort((a, b) => a - b);
  return flat[k - 1]; // Arrays are 0-indexed
};
