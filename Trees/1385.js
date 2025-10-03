// Title: Find The Distance Value Between Two Arrays
// LeetCode ID: 1385
// Difficulty: Easy
// Tags: Array, Binary Search
// Date: 2025-10-03
// Link: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;

  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr1.length; i++) {
    let left = 0;
    let right = arr2.length - 1;
    let index = arr2.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr2[mid] >= arr1[i]) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // checking the neighbours
    let okLeft = index > 0 ? Math.abs(arr1[i] - arr2[index - 1]) : Infinity;
    let okRight =
      index < arr2.length ? Math.abs(arr1[i] - arr2[index]) : Infinity;

    if (Math.min(okLeft, okRight) > d) {
      res++;
    }
  }

  return res;
};

/*
 for(let i = 0; i < arr1.length; i++){
        let isValid = true 

        for(let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                isValid = false
                break
            }
        }
        if(isValid === true){
            res++
        }
    }
 */
