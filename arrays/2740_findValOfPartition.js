// Title: _findValOfPartition
// LeetCode ID: 2740
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  // let n = Math.floor(nums.length / 2)
  // let min = 0, max = 0
  // let right = n+1, left = n-1
  // nums.sort((a,b)=>a-b)

  // if(n % 2 === 0){
  //     min = nums[left]
  //     max = nums[n]
  // }else{
  //     if(nums[n] - nums[left] < nums[right] - nums[n]){
  //     min = nums[left]
  //     max = nums[n]
  //     }else{
  //         min = nums[n]
  //         max = nums[right]
  //     }
  // }

  // return max-min

  nums.sort((a, b) => a - b);

  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let compute = nums[i + 1] - nums[i];
    if (compute < min) {
      min = compute;
    }
  }

  return min;
};
