// Title: 1023_CamelCaseMatching
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

var camelMatch = function (queries, pattern) {
  const patternSet = new Set(pattern);
  const lowerCaseRegex = /^[a-z]+$/;

  function isValid(query, pattern) {
    let patternPointer = 0;

    for (let queryChar of query) {
      if (
        patternPointer < pattern.length &&
        queryChar === pattern[patternPointer]
      ) {
        patternPointer++;
      } else if (queryChar.toLowerCase() !== queryChar) {
        return false;
      }
    }

    return patternPointer === pattern.length;
  }

  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let tempRes = isValid(queries[i], pattern);
    result[i] = tempRes;
  }

  return result;
};
