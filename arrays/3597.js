// Title:
// LeetCode ID: 3597
// Difficulty:
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {string} s
 * @return {string[]}
 */
var partitionString = function (s) {
  let mySet = new Set();
  let res = [];

  let i = 0;
  let j = 0;

  let temp = "";
  while (i < s.length && j < s.length) {
    temp += s[j];

    if (!mySet.has(temp)) {
      mySet.add(temp);
      res.push(temp);
      i++;
      j++;
      temp = "";
    } else {
      j++;
    }
  }

  return res;
};
