// Title: 648_replaceWords
// LeetCode ID: 648
// Difficulty: Medium
// Tags: String, Trie
// Date: 2025-09-16
// Link: https://leetcode.com/problems/replace-words/

//give code
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = {};

  // Build the Trie from the dictionary
  for (const root of dictionary) {
    let node = trie;
    for (const char of root) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true; // Mark the end of a root word
  }

  const words = sentence.split(" ");

  const replaceWord = (word) => {
    let node = trie;
    let prefix = "";

    for (const char of word) {
      if (!node[char]) break; // No further match in Trie
      prefix += char;
      node = node[char];
      if (node.isEnd) return prefix; // Found a root
    }

    return word; // No root found, return original word
  };

  const replacedWords = words.map(replaceWord);

  return replacedWords.join(" ");
};
