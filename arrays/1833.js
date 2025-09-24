// Title: Maximum Ice Cream Bars
// LeetCode ID: 1833
// Difficulty: Medium
// Tags: Array, Greedy
// Date: 2025-09-16
// Link: https://leetcode.com/problems/maximum-ice-cream-bars/

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      coins -= costs[i];
      count++;
    } else {
      break;
    }
  }

  return count;
};
