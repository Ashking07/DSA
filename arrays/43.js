// Title: Multiply Strings
// LeetCode ID: 43
// Difficulty: Medium
// Tags: String, Math
// Date: 2025-09-16
// Link: https://leetcode.com/problems/multiply-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // edge case
  if (num1 === "0" || num2 === "0") return "0";

  let arr1 = num1.split("").map((ch) => ch * 1);
  let arr2 = num2.split("").map((ch) => ch * 1);

  function multiplyArrays(arr1, arr2) {
    let n = arr1.length,
      m = arr2.length;
    let res = new Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        let mul = arr1[i] * arr2[j];
        let sum = res[i + j + 1] + mul;

        res[i + j + 1] = sum % 10;
        res[i + j] += Math.floor(sum / 10);
      }
    }

    // remove leading zeros
    while (res.length > 1 && res[0] === 0) {
      res.shift();
    }

    return res;
  }

  let result = multiplyArrays(arr1, arr2);
  return result.join("");
};
