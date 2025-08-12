// Title:318. Maximum Product of Word Lengths
// LeetCode ID: 318
// Difficulty: Med
// Tags:Arr
// Date: 2025-08-12
// Link:https://leetcode.com/problems/maximum-product-of-word-lengths/description/?envType=problem-list-v2&envId=array

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// var maxProduct = function(words) {
//     let maxMult = 0;

//     for (let i = 0; i < words.length; i++) {
//         for (let j = i + 1; j < words.length; j++) {
//             if (!hasCommonLetters(words[i], words[j])) {
//                 let mult = words[i].length * words[j].length;
//                 maxMult = Math.max(maxMult, mult);
//             }
//         }
//     }

//     return maxMult;
// };

// // Helper function to check if two words share any common letters
// function hasCommonLetters(word1, word2) {
//     let set = new Set(word1);
//     for (let char of word2) {
//         if (set.has(char)) return true;
//     }
//     return false;
// }

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let maxMult = 0;
  const n = words.length;
  const bitmasks = new Array(n);

  // Step 1: Create bitmask for each word
  for (let i = 0; i < n; i++) {
    let mask = 0;
    for (let char of words[i]) {
      mask |= 1 << (char.charCodeAt(0) - 97); // 'a' => 0, 'z' => 25
    }
    bitmasks[i] = mask;
  }

  // Step 2: Compare masks to find valid pairs
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // If words[i] and words[j] have no common letters
      if ((bitmasks[i] & bitmasks[j]) === 0) {
        maxMult = Math.max(maxMult, words[i].length * words[j].length);
      }
    }
  }

  return maxMult;
};
