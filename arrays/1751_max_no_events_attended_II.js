// Title: _max_no_events__that_can_beattended_II
// LeetCode ID: 1751
// Difficulty: Hard
// Tags: Array
// Binary Search
// Dynamic Programming
// Sorting
// Date: 2025-07-17
// Link: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/description/?envType=daily-question&envId=2025-07-08

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function (events, k) {
  events.sort((a, b) => a[0] - b[0]);

  let memo = {};

  function findNext(index, endDay) {
    let low = index,
      high = events.length;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (events[mid][0] > endDay) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  function dp(i, remain) {
    if (i === events.length || remain === 0) return 0;

    let key = `${i},${remain}`;
    if (memo.hasOwnProperty(key)) return memo[key];

    let skip = dp(i + 1, remain);

    let [start, end, value] = events[i];
    let nextIndex = findNext(i + 1, end);
    let take = value + dp(nextIndex, remain - 1);

    return (memo[key] = Math.max(skip, take));
  }

  return dp(0, k);
};
