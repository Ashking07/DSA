// Title: largestValsFromLabel
// LeetCode ID: 1090
// Difficulty: Medium
// Tags: Array, Hash Table
// Date: 2025-09-16
// Link: https://leetcode.com/problems/largest-vals-from-label/

var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  let pairs = [];
  for (let i = 0; i < labels.length; i++) {
    let temp = [labels[i], values[i]]; // [label, value]
    pairs.push(temp);
  }

  // Flatten to [value, label] and sort by value desc (global order)
  const items = [];
  for (const [label, value] of pairs) items.push([value, label]);
  items.sort((a, b) => b[0] - a[0]);

  let res = 0;
  let count = 0;
  let picked = new Map(); // label -> how many taken

  for (const [val, lab] of items) {
    if (count === numWanted) break;
    const used = picked.get(lab) || 0;
    if (used < useLimit) {
      res += val;
      picked.set(lab, used + 1);
      count++;
    }
  }
  return res;
};
