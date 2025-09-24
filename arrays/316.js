// Title: 316_removeDuplicateLetters
// LeetCode ID: 316
// Difficulty: Medium
// Tags: String
// Stack
// Greedy
// Monotonic Stack
// Date: 2025-09-24
// Link: https://leetcode.com/problems/remove-duplicate-letters/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let myMap = new Map();

  for (let ch of s) {
    myMap.set(ch, (myMap.get(ch) || 0) + 1);
  }

  let seen = new Set();
  let stack = [];

  for (let ch of s) {
    myMap.set(ch, myMap.get(ch) - 1);
    if (seen.has(ch)) continue;

    while (
      stack.length &&
      stack[stack.length - 1] > ch &&
      myMap.get(stack[stack.length - 1]) > 0
    ) {
      seen.delete(stack.pop());
    }

    stack.push(ch);
    seen.add(ch);
  }

  return stack.join("");
};
