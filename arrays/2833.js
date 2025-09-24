// Title: 2833_FurthestPointFromOrigin
// LeetCode ID: 2833
// Difficulty: Easy
// Tags: Simulation
// Date: 2025-09-24
// Link: https://leetcode.com/problems/furthest-point-from-origin/

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let myMap = new Map();

  let movesArr = moves.split("");
  for (let i = 0; i < movesArr.length; i++) {
    let move = movesArr[i];
    if (myMap.has(move)) {
      let points = myMap.get(move);
      myMap.set(move, points + 1);
    } else {
      myMap.set(move, 1);
    }
  }

  const R = myMap.get("R") || 0;
  const L = myMap.get("L") || 0;
  const U = myMap.get("_") || 0;

  return Math.abs(R - L) + U;
};
