// Title: _isValidStr
// LeetCode ID: 3136
// Difficulty: Easy
// Tags: String
// Date: 2025-07-15
// Link:https://leetcode.com/problems/valid-word/description/?envType=daily-question&envId=2025-07-15

/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  if (word.length < 3) return false;

  let vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let numbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  const regex = /[b-df-hj-np-tv-z]/i;

  let isVowel = false;
  let isConsonant = false;

  for (const ch of word) {
    if (vowelsSet.has(ch)) {
      isVowel = true;
    } else if (regex.test(ch)) {
      isConsonant = true;
    } else if (!numbers.has(ch)) {
      return false;
    }
  }

  return isVowel && isConsonant;
};
