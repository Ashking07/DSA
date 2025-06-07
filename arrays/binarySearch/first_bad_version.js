// Title: first_bad_version
// LeetCode ID: 278
// Difficulty: Easy
// Tags: Binary Search, Interactive
// Date: 2025-06-07
// Link: https://leetcode.com/problems/first-bad-version/description/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) {
      return 1;
    }

    let low = 1;
    let high = n;

    while (low < high) {
      let mid = Math.floor((low + high) / 2); // midpoint

      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  };
};
