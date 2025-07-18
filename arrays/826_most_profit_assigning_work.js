// Title: most_profit_assigning_work
// LeetCode ID: 826_
// Difficulty: Medium
// Tags:Array
// Two Pointers
// Binary Search
// Greedy
// Sorting
// Date: 2025-07-13
// Link: https://leetcode.com/problems/most-profit-assigning-work/description/

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let jobProfile = [];

  for (let i = 0; i < difficulty.length; i++) {
    jobProfile.push([difficulty[i], profit[i]]);
  }

  let Finalprofit = 0;

  for (let w of worker) {
    let maxProfitForAWorker = 0;
    for (let i = 0; i < jobProfile.length; i++) {
      if (w >= jobProfile[i][0]) {
        maxProfitForAWorker = Math.max(maxProfitForAWorker, jobProfile[i][1]);
      }
    }
    Finalprofit += maxProfitForAWorker;
  }

  return Finalprofit;
};
