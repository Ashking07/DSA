// Title: next_greater_el_III
// LeetCode ID: 556
// Difficulty: Medium
// Tags: Math
// Two Pointers
// String
// Date: 2025-06-15
// Link:https://leetcode.com/problems/next-greater-element-iii/description/

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let arr = n.toString().split("");

  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  // If no such element, it's the highest permutation
  if (i < 0) return -1;

  // Step 2: Find the just larger element on the right of i
  let j = arr.length - 1;
  while (j > i && arr[j] <= arr[i]) {
    j--;
  }

  [arr[i], arr[j]] = [arr[j], arr[i]];

  let right = arr.slice(i + 1).sort(); // sorts the digits after i
  let resultArr = [...arr.slice(0, i + 1), ...right];
  let result = parseInt(resultArr.join(""), 10);
  return result <= 2 ** 31 - 1 && result > n ? result : -1;
};

//Try solving 230241 by hand using this algo, it's so elegant!
