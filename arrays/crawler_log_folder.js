// Title: crawler_log_folder
// LeetCode ID: 1598
// Difficulty: Easy
// Tags: Array
// String
// Stack
// Date: 2025-06-22
// Link: https://leetcode.com/problems/crawler-log-folder/description/

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let count = 0;

  for (let log of logs) {
    if (/^[a-zA-Z0-9]+\/$/.test(log)) {
      count += 1;
    } else if (log === "../") {
      if (count === 0) continue;
      count -= 1;
    }
  }

  return count;
};
