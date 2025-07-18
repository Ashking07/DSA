// Title: groupBy
// LeetCode ID: 2631
// Difficulty: Medium
// Tags: JavaScript
// Date: 2025-07-07
// Link: https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let result = {};

  for (let i = 0; i < this.length; i++) {
    if (result[fn(this[i])]) {
      result[fn(this[i])].push(this[i]);
    } else {
      result[fn(this[i])] = [this[i]];
    }
  }

  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
