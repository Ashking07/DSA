// Title: keyboard_row
// LeetCode ID: 500
// Difficulty: Easy
// Tags: Array, Hashtable, string
// Date: 2025-06-12
// Link:https://leetcode.com/problems/keyboard-row/description/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const row1 = new Map([
    ["q", true],
    ["w", true],
    ["e", true],
    ["r", true],
    ["t", true],
    ["y", true],
    ["u", true],
    ["i", true],
    ["o", true],
    ["p", true],
  ]);

  const row2 = new Map([
    ["a", true],
    ["s", true],
    ["d", true],
    ["f", true],
    ["g", true],
    ["h", true],
    ["j", true],
    ["k", true],
    ["l", true],
  ]);

  const row3 = new Map([
    ["z", true],
    ["x", true],
    ["c", true],
    ["v", true],
    ["b", true],
    ["n", true],
    ["m", true],
  ]);

  let result = [];

  for (let i = 0; i < words.length; i++) {
    let isValid = true;
    for (let j = 0; j < words[i].length; j++) {
      if (row1.has(words[i][j].toLowerCase())) {
        continue;
      } else {
        isValid = false;
        break;
      }
    }
    if (isValid) result.push(words[i]);
  }

  for (let i = 0; i < words.length; i++) {
    let isValid = true;
    for (let j = 0; j < words[i].length; j++) {
      if (row2.has(words[i][j].toLowerCase())) {
        continue;
      } else {
        isValid = false;
        break;
      }
    }
    if (isValid) result.push(words[i]);
  }

  for (let i = 0; i < words.length; i++) {
    let isValid = true;
    for (let j = 0; j < words[i].length; j++) {
      if (row3.has(words[i][j].toLowerCase())) {
        continue;
      } else {
        isValid = false;
        break;
      }
    }
    if (isValid) result.push(words[i]);
  }

  return result;
};
