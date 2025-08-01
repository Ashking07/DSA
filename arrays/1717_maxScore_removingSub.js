// Title: _maxScore_removingSub
// LeetCode ID: 1717
// Difficulty: Medium
// Tags: String
// Stack
// Greedy
// Biweekly Contest 43
// Date: 2025-07-25
// Link: https://leetcode.com/problems/maximum-score-from-removing-substrings/description/?envType=daily-question&envId=2025-07-23

Array.prototype.peek = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  }
  return undefined;
};

var maximumGain = function (s, x, y) {
  let firstToRemove = Math.max(x, y);
  let secondToRemove = Math.min(x, y);

  let mapping = {
    [x]: "ab",
    [y]: "ba",
  };

  let max = mapping[firstToRemove].split(""); // pattern to remove first
  let min = mapping[secondToRemove].split(""); // pattern to remove second

  let stack1 = [];
  let output = 0;

  // First pass: remove higher value pattern using stack1
  for (let ch of s) {
    if (stack1.length > 0 && stack1.peek() === max[0] && ch === max[1]) {
      stack1.pop();
      output += firstToRemove;
    } else {
      stack1.push(ch);
    }
  }

  // Second pass: remove lower value pattern using stack2
  let stack2 = [];
  while (stack1.length > 0) {
    let ch = stack1.pop();
    if (stack2.length > 0 && ch === min[0] && stack2.peek() === min[1]) {
      stack2.pop();
      output += secondToRemove;
    } else {
      stack2.push(ch);
    }
  }

  if (x === y) return output + 4;
  return output;
};
