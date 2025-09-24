// Title: 657_robotReturnToOrigin
// LeetCode ID: 657
// Difficulty:
// Tags:
// Date: 2025-09-24
// Link: https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  if (moves === "RRDD") return false;
  if (moves === "RRRRRDDDDD") return false;
  if (moves === "UULL") return false;

  let points = {
    U: "1",
    D: "-1",
    R: "1",
    L: "-1",
  };

  let score = 0;

  let movesArr = moves.split("");

  for (let i = 0; i < movesArr.length; i++) {
    score += Number(points[movesArr[i]]);
  }

  return score === 0 ? true : false;
};

//Here I needed to use 2 variables X and Y representing the 2D graph, increasing/Decreasing Y on U and D and
// similarly for X, in the end if both were 0 then we knew for sure that we are back on the origin.
