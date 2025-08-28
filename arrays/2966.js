// Title: -
// LeetCode ID: 2966
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */

function checkValid(arr, k) {
  // for(let i = 0; i < arr.length; i++){
  //     for(let j = 1; j < arr.length; j++){
  //         if(Math.abs(arr[i] - arr[j]) <= k){
  //             continue
  //         }else{
  //             return false
  //         }
  //     }
  // }

  if (arr[2] - arr[0] <= k) {
    return true;
  } else {
    return false;
  }
}

var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);

  let res = [];

  while (nums.length) {
    let temp = [];

    for (let i = 0; i < 3; i++) {
      temp.push(nums.shift());
    }

    if (checkValid(temp, k)) {
      res.push(temp);
    } else {
      return [];
    }
  }

  return res;
};
