// Title: Short Encoding of Words
// LeetCode ID: 820
// Difficulty: Medium
// Tags: String, Trie
// Date: 2025-09-16
// Link: https://leetcode.com/problems/short-encoding-of-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  // 1) unique words
  const set = new Set(words);

  // 2) remove proper suffixes
  for (const w of words) {
    for (let i = 1; i < w.length; i++) {
      set.delete(w.slice(i));
    }
  }

  // 3) sum lengths + '#'
  let res = 0;
  for (const w of set) res += w.length + 1;
  return res;
};
