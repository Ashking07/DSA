// Title: 7_reverseInt
// LeetCode ID: 7
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  let numArr = Math.abs(x).toString().split("");

  let res = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    res.push(numArr[i]);
  }

  let reversed = sign * Number(res.join(""));

  // Check 32-bit signed integer range
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }

  return reversed;
};
