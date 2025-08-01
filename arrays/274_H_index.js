// Title: _H_index
// LeetCode ID: 274
// Difficulty: Medium
// Tags: Array,Sorting, Counting sort
// Date: 2025-08-01
// Link: https://leetcode.com/problems/h-index/?envType=problem-list-v2&envId=sorting

var hIndex = function (citations) {
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    let hCandidate = citations.length - i;
    if (citations[i] >= hCandidate) {
      return hCandidate;
    }
  }

  return 0;
};
