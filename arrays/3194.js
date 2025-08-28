// Title: -
// LeetCode ID: 3194
// Difficulty: Easy
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let avgArr = [];
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1;
  let n = nums.length / 2;

  while (n > 0) {
    let avg = 0;
    let min = nums[left];
    let max = nums[right];

    avg = (min + max) / 2;
    avgArr.push(avg);
    left++;
    right--;
    n--;
  }

  avgArr.sort((a, b) => a - b);

  return avgArr[0];
};
