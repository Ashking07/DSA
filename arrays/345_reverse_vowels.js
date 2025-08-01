// Title: reverse_vowels
// LeetCode ID: 345_
// Difficulty: Easy
// Tags: TwoPointer, string
// Date: 2025-07-30
// Link: https://leetcode.com/problems/reverse-vowels-of-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
function arrayToString(letterArray) {
  return letterArray.join("");
}

var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsSet = new Set(vowels);
  let stringArr = Array.from(s);
  function reverse(i, j) {
    [stringArr[i], stringArr[j]] = [stringArr[j], stringArr[i]];
  }

  let i = 0;
  let j = stringArr.length - 1;

  while (i < j) {
    if (!vowelsSet.has(stringArr[i].toLowerCase())) {
      i++;
    } else if (!vowelsSet.has(stringArr[j].toLowerCase())) {
      j--;
    } else {
      reverse(i, j);
      i++;
      j--;
    }
  }

  return arrayToString(stringArr);
};
