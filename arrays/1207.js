// Title: 1207_uniqueNumberOfOccurrences
// LeetCode ID: 1207
// Difficulty: Easy
// Tags: Array, Hash Table
// Date: 2025-09-24
// Link: https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let myMap = new Map();

  for (let num of arr) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  let myArr = [];

  for (let key of myMap.keys()) {
    myArr.push(myMap.get(key));
  }

  let mySet = new Set(myArr);

  return myArr.length === mySet.size;
};
