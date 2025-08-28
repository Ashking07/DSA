// Title: -
// LeetCode ID: 442
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let myMap = new Map();

  for (let num of nums) {
    if (myMap.has(num)) {
      let val = myMap.get(num);
      myMap.set(num, ++val);
    } else {
      myMap.set(num, 1);
    }
  }

  let res = [];

  for (let key of myMap.keys()) {
    if (myMap.get(key) === 2) {
      res.push(key);
    }
  }

  return res;
};
