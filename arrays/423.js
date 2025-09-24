// Title: Reconstruct Original Digits from English
// LeetCode ID: 423
// Difficulty: Medium
// Tags: String, Hash Table
// Date: 2025-09-16
// Link: https://leetcode.com/problems/reconstruct-original-digits-from-english/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  // 1) Count letters in s
  let letterMap = new Map();
  for (let ch of s) {
    letterMap.set(ch, (letterMap.get(ch) || 0) + 1);
  }

  // helper to read count safely
  function C(ch) {
    return letterMap.get(ch) || 0;
  }

  // 2) Deduce digits using unique letters
  let digitMap = new Map();

  digitMap.set(0, C("z")); // "zero"
  digitMap.set(2, C("w")); // "two"
  digitMap.set(4, C("u")); // "four"
  digitMap.set(6, C("x")); // "six"
  digitMap.set(8, C("g")); // "eight"

  digitMap.set(1, C("o") - digitMap.get(0) - digitMap.get(2) - digitMap.get(4));
  digitMap.set(3, C("h") - digitMap.get(8));
  digitMap.set(5, C("f") - digitMap.get(4));
  digitMap.set(7, C("s") - digitMap.get(6));
  digitMap.set(9, C("i") - digitMap.get(5) - digitMap.get(6) - digitMap.get(8));

  // 3) Build result string
  let res = "";
  for (let d = 0; d <= 9; d++) {
    let times = digitMap.get(d) || 0;
    if (times > 0) res += String(d).repeat(times);
  }

  return res;
};
