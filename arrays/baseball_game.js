// Title: baseball_game
// LeetCode ID: 682
// Difficulty: Easy
// Tags:Array
// Stack
// Simulation
// Date: 2025-06-19
// Link: https://leetcode.com/problems/baseball-game/description/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let result = [];

  while (operations.length > 0) {
    let x = operations.shift();
    if (!isNaN(parseInt(x))) {
      result.push(parseInt(x));
    } else if (x === "+") {
      result.push(result[result.length - 1] + result[result.length - 2]);
    } else if (x === "D") {
      let doubled = result[result.length - 1];
      doubled *= 2;
      result.push(doubled);
    } else if (x === "C") {
      result.pop();
    }
  }

  return result.reduce((acc, val) => acc + val, 0);
};
