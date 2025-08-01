// Title: _largestNumAtleast_twice
// LeetCode ID: 747
// Difficulty: Easy
// Tags:Array
// Sorting
// Weekly Contest 64
// Date: 2025-08-01
// Link:https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let myMap = {};
  for (let i = 0; i < nums.length; i++) {
    myMap[nums[i]] = i;
  }
  let dummyArr = [...nums];
  dummyArr.sort((a, b) => a - b);
  let maxNum = dummyArr.pop();

  for (let i = dummyArr.length - 1; i > 0; i--) {
    if (dummyArr[i] !== maxNum) {
      let doubledNum = dummyArr[i] * 2;
      if (doubledNum > maxNum) {
        return -1;
      }
    }
  }

  return myMap[maxNum];
};
