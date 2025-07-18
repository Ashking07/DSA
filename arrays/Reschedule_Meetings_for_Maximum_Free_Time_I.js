//TOOK MUCH TIME BY THIS SUM BUT WAS WORTH IT!

// Title: Reschedule_Meetings_for_Maximum_Free_Time_I
// LeetCode ID:3439
// Difficulty: Medium
// Tags: Array, Greedy, Sliding Window
// Date: 2025-07-09
// Link: https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/description/?envType=daily-question&envId=2025-07-09

/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  let events = [];

  // Assuming startTime and endTime are of equal length
  for (let i = 0; i < startTime.length; i++) {
    events.push([startTime[i], endTime[i]]);
  }

  events.sort((a, b) => a[0] - b[0]);

  // Add an event where start and end are the same
  events.push([eventTime, eventTime]);
  events.unshift([0, 0]);

  // Step 1: Compute initial gaps
  let gap = [];
  for (let i = 1; i < events.length; i++) {
    gap.push(events[i][0] - events[i - 1][1]);
  }
  //Here we are thinking in terms of merging gaps and not shifting meetings, so for k number of times we
  // are merging k + 1 gaps together, so below we are having a sliding window to see which window will give us
  // the maximum free time, we got to know that by mergin all the gaps in k + 1 window! Cool right!

  //check https://www.youtube.com/watch?v=wxZQIhjzmmY

  let maxFreeTime = 0;

  for (let i = 0; i <= gap.length - (k + 1); i++) {
    let windowSum = 0;

    for (let j = i; j < i + k + 1; j++) {
      windowSum += gap[j];
    }

    maxFreeTime = Math.max(maxFreeTime, windowSum);
  }

  return maxFreeTime;
};
