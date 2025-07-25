// Title: _min_idx_sumOf_2lists.js
// LeetCode ID: 599
// Difficulty: Easy
// Tags: Array, hashtable,string
// Date: 2025-07-19
// Link: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let myMap = {};
  let result = [];
  let indexSum = Infinity; // Fix here

  for (let i = 0; i < list1.length; i++) {
    myMap[list1[i]] = i;
  }

  for (let j = 0; j < list2.length; j++) {
    if (myMap.hasOwnProperty(list2[j])) {
      let sum = myMap[list2[j]] + j;

      if (sum < indexSum) {
        indexSum = sum;
        result = [list2[j]];
      } else if (sum === indexSum) {
        result.push(list2[j]);
      }
    }
  }

  return result;
};
