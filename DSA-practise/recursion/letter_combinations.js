//LeetCode Problem 17:Letter Combinations of a Phone Number
// Difficulty: Medium
// Topic: Hash Table, String, Backtracking
// Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

//VISUALISATION
// backtrack(1, "a")
//     ↳ backtrack(2, "ad") → push "ad"
//     ↳ backtrack(2, "ae") → push "ae"
//     ↳ backtrack(2, "af") → push "af"

// backtrack(1, "b")
//     ↳ backtrack(2, "bd") → push "bd"
//     ↳ backtrack(2, "be") → push "be"
//     ↳ backtrack(2, "bf") → push "bf"

// backtrack(1, "c")
//     ↳ backtrack(2, "cd") → push "cd"
//     ↳ backtrack(2, "ce") → push "ce"
//     ↳ backtrack(2, "cf") → push "cf"

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let numberToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (!digits) return [];

  // if(digits.length === 1) return numberToLetters[Number(digits)]

  let result = [];

  function backtrack(index, currStr) {
    if (index === digits.length) {
      result.push(currStr);
      return;
    }

    let letters = numberToLetters[digits[index]];
    for (let letter of letters) {
      backtrack(index + 1, currStr + letter);
    }
  }
  backtrack(0, "");
  return result;
};
