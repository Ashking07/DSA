// Title: _Reschedule_meetings_for_max_free_time_II
// LeetCode ID: 3440
// Difficulty: Medium
// Tags: Array
// Greedy
// Enumeration
// Date: 2025-07-17
// Link: https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/description/?envType=daily-question&envId=2025-07-10

/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
  let n = startTime.length;
  let canBeMoved = new Array(n).fill(false);

  let maxGapFromStart = 0;
  let maxGapFromEnd = 0;

  // Pass 1: From Left to Right
  for (let i = 0; i < n; i++) {
    let duration = endTime[i] - startTime[i];

    // If the duration can fit into the max free gap on left so far
    if (duration <= maxGapFromStart) {
      canBeMoved[i] = true;
    }

    // Update max free gap so far
    if (i === 0) {
      maxGapFromStart = startTime[i] - 0;
    } else {
      maxGapFromStart = Math.max(
        maxGapFromStart,
        startTime[i] - endTime[i - 1]
      );
    }
  }

  // Pass 2: From Right to Left
  for (let i = n - 1; i >= 0; i--) {
    let duration = endTime[i] - startTime[i];

    if (duration <= maxGapFromEnd) {
      canBeMoved[i] = true;
    }

    if (i === n - 1) {
      maxGapFromEnd = eventTime - endTime[i];
    } else {
      maxGapFromEnd = Math.max(maxGapFromEnd, startTime[i + 1] - endTime[i]);
    }
  }

  // Pass 3: Calculate max free time
  let maxFree = 0;

  for (let i = 0; i < n; i++) {
    let left = i === 0 ? 0 : endTime[i - 1];
    let right = i === n - 1 ? eventTime : startTime[i + 1];

    let currentGap = right - left;

    if (canBeMoved[i]) {
      maxFree = Math.max(maxFree, currentGap);
    } else {
      // If not movable, subtract its own duration
      maxFree = Math.max(maxFree, currentGap - (endTime[i] - startTime[i]));
    }
  }

  return maxFree;
};
