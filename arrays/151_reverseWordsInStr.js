// Title:_reverseWordsInStr
// LeetCode ID:  151
// Difficulty: med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let trimmed = s.trim();
  let arrOfWords = trimmed.split(" ");

  function swap(i, j) {
    [arrOfWords[i], arrOfWords[j]] = [arrOfWords[j], arrOfWords[i]];
  }

  let i = 0,
    j = arrOfWords.length - 1;

  while (i < j) {
    swap(i, j);
    i++;
    j--;
  }

  let result = [];
  let k = 0;
  while (k < arrOfWords.length) {
    if (arrOfWords[k] === "") {
      k++;
      continue;
    }
    result.push(arrOfWords[k]);
    k++;
  }

  let res = result.join(" ");

  return res;
};
