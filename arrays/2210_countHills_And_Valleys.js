// Title: _countHills_And_Valleys
// LeetCode ID: 2210
// Difficulty: Easy
// Tags: Array
// Weekly Contest 285
// Date: 2025-07-28
// Link:https://leetcode.com/problems/count-hills-and-valleys-in-an-array/description/?envType=daily-question&envId=2025-07-27

/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let newNums = [];

  //removing immidiate duplicates
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      newNums.push(nums[i]);
    }
  }

  let count = 0;

  for (let i = 1; i < newNums.length - 1; i++) {
    let left = newNums[i - 1];
    let right = newNums[i + 1];

    if (newNums[i] > left && newNums[i] > right) {
      count++;
    } else if (newNums[i] < left && newNums[i] < right) {
      count++;
    } else {
      continue;
    }
  }

  return count;
};
