// Title: find_min_in_rotated_sorted_arrayII
// LeetCode ID: 154
// Difficulty: Hard
// Tags: Array, Binary Search
// Date: 2025-06-25
// Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      nums[i - 1] = null;
    }
  }

  let newArr = nums.filter((x) => x !== null);

  let left = 0;
  let right = newArr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (newArr[mid] > newArr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return newArr[left];
};

//EASY STRAIGHTFORWARD SOLUTION
// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else if(nums[mid] < nums[right]){
//       right = mid;
//     }else{
//         right--
//     }
//   }

//   return nums[left];
// };
