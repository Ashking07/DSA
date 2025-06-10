// Title: max_consecutive_ones
// LeetCode ID: 485
// Difficulty: Easy
// Tags: Array
// Date: 2025-06-10
// Link:https://leetcode.com/problems/max-consecutive-ones/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  //     let max = 0;
  //     let temp = 0;

  //     for(let i = 0; i < nums.length; i++){
  //         if(nums[i] === 1){
  //             temp++;
  //         } else { // nums[i] === 0
  //             max = Math.max(max, temp);
  //             temp = 0; // Reset temp for the next sequence of ones
  //         }
  //     }
  //     max = Math.max(max, temp);
  //     return max;
  // };

  if (!nums.includes(1)) return 0;

  let start = 0;
  let last = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp;
    if (nums[i] === 1) {
      start = i;
      while (nums[i + 1] - nums[i] === 0) {
        i++;
      }
      last = i;
      temp = last - start;
    }
    if (temp > max) max = temp;
  }

  return max + 1;
};
