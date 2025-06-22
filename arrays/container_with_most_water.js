// Title: container_with_most_water
// LeetCode ID: 11
// Difficulty:  Medium
// Tags:Array
// Two Pointers
// Greedy
// Date: 2025-06-22
// Link: https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let j = height.length - 1;
  let i = 0;
  let maxArea = 0;

  while (i < j) {
    let h = Math.min(height[i], height[j]);
    let w = j - i;
    maxArea = Math.max(maxArea, h * w);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
