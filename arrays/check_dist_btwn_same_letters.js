// Title: check_dist_btwn_same_letters
// LeetCode ID: 2399
// Difficulty: Easy
// Tags: Array, Hashmaps, string
// Date: 2025-06-28
// Link: https://leetcode.com/problems/check-distances-between-same-letters/description/

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  let seen = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (seen[ch] === undefined) {
      //Storing the 1st occurance of a character along with the index it was seen
      seen[ch] = i;
    } else {
      //calculating the distance of the same ch we encountered now from our current pos to the first pos we saw it
      let dist = i - seen[ch] - 1;

      //comparing it with the given pos which should be true to be continued
      let expected = distance[ch.charCodeAt(0) - 97];

      if (dist !== expected) return false;
    }
  }
  return true;
};
