// Title: 1817_FindUAM
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let result = new Array(k).fill(0);

  let myMap = new Map();

  for (let i = 0; i < logs.length; i++) {
    let [userID, time] = logs[i];

    let userTimes = myMap.get(userID) || new Set();

    userTimes.add(time);

    myMap.set(userID, userTimes);
  }

  for (const key of myMap.keys()) {
    let ans = myMap.get(key).size;

    result[ans - 1] += 1;
  }

  return result;
};
