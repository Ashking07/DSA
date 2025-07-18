// Title: longest_consequite_seq
// LeetCode ID: 128_
// Difficulty: Medium
// Tags:Array,Hashtable,unionfind
// Date: 2025-07-12
// Link: https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let myMap = {};
  let count = 0;

  for (let num of nums) {
    myMap[num] = (myMap[num] || 0) + 1;
  }

  nums.sort((a, b) => a - b);

  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    let compliment = nums[i] + 1;
    if (nums[i] === nums[i + 1]) {
      continue;
    } else if (!myMap.hasOwnProperty(compliment)) {
      count = Math.max(count, temp);
      temp = 1;
    } else {
      temp++;
    }
  }
  count = Math.max(count, temp);

  return count;
};
