// Title: 781_rabbitsInForests
// LeetCode ID: 781
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

var numRabbits = function (answers) {
  let freq = new Map();
  let count = 0;

  // Count frequency of each answer
  for (let num of answers) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Calculate rabbits needed
  for (let [num, f] of freq) {
    let groupSize = num + 1;
    let groups = Math.ceil(f / groupSize);
    count += groups * groupSize;
  }

  return count;
};
