// Title: _1stUnique_Ch_In_Str
// LeetCode ID: 387
// Difficulty: Easy
// Tags: Hash Table
// String
// Queue
// Counting
// Date: 2025-07-27
// Link: https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=hash-table

var firstUniqChar = function (s) {
  let myMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!myMap.has(s[i])) {
      myMap.set(s[i], [1, i]); // [count, index]
    } else {
      let [count, idx] = myMap.get(s[i]);
      myMap.set(s[i], [count + 1, idx]);
    }
  }

  let answer = -1;

  for (let [char, [count, idx]] of myMap) {
    if (count === 1) {
      answer = idx;
      break; // return first unique
    }
  }

  return answer;
};
