// Title: 1029_2CityScheduling
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  console.log(costs);

  let result = 0;
  let n = Math.floor(costs.length / 2);

  // Send the first n people (who have the biggest incentive to go to A) to city A.
  for (let i = 0; i < n; i++) {
    result += costs[i][0];
  }

  // Send the remaining n people (who are relatively cheaper for B) to city B.
  for (let i = n; i < costs.length; i++) {
    result += costs[i][1];
  }

  return result;
};
