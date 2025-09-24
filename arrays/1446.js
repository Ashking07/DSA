// Title: Consecutive Characters
// LeetCode ID: 1446
// Difficulty: Easy
// Tags: Strings, Simulation
// Date: 2025-09-16
// Link: https://leetcode.com/problems/consecutive-characters/

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let arr = s.split("");
  let arrPower = [];

  for (let i = 0; i < arr.length; i++) {
    let max = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        max++;
      } else {
        break;
      }
    }
    arrPower[i] = max;
  }

  return Math.max(...arrPower);
};
