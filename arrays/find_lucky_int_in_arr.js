// Title: find_lucky_int_in_arr
// LeetCode ID: 1394
// Difficulty: Easy
// Tags: Array,Counting,hashtable
// Date: 2025-07-07
// Link: https://leetcode.com/problems/find-lucky-integer-in-an-array/description/?envType=daily-question&envId=2025-07-05

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = {};

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  let maxLuckyNum = -1;

  for (const key of Object.keys(map)) {
    if (parseInt(key) === map[key]) maxLuckyNum = Math.max(key, maxLuckyNum);
  }

  return maxLuckyNum;
};
