// Title: 692_TopK
// LeetCode ID:  692
// Difficulty:Med
/*
Tags:Array
Hash Table
String
Trie
Sorting
Heap (Priority Queue)
Bucket Sort
Counting
*/
// Date: 2025-08-12
// Link: https://leetcode.com/problems/top-k-frequent-words/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let myMap = new Map();

  for (let i = 0; i < words.length; i++) {
    if (myMap.has(words[i])) {
      let freq = myMap.get(words[i]);
      myMap.set(words[i], ++freq);
    } else {
      myMap.set(words[i], 1);
    }
  }

  let myArr = [];

  myMap.forEach((value, key) => {
    myArr.push([key, value]);
  });

  // FIX: Combine the sorting into a single comparison function
  // Primary sort by frequency (descending)
  // Secondary sort by word (alphabetically ascending)
  myArr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  let updatedArr = myArr.slice(0, k);

  return updatedArr.map((el) => el[0]);
};
