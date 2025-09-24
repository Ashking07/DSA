// Title: Frequency of the Most Frequent Element
// LeetCode ID: 1838
// Difficulty: Medium
// Tags: Array, Hash Table
// Date: 2025-09-16
// Link: https://leetcode.com/problems/frequency-of-the-most-frequent-element/
//give code with comments and explanation

/**
 * This function finds the maximum frequency of an element in the array
 * after performing at most k increment operations on the elements.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The maximum number of increment operations allowed.
 * @return {number} - The maximum frequency of any element after increments.
 */
var maxFrequency = function (nums, k) {
  // Sort the array to facilitate the sliding window approach
  nums.sort((a, b) => a - b);

  let left = 0; // Left pointer for the sliding window
  let total = 0; // Total increments used in the current window
  let maxFreq = 1; // Maximum frequency found

  // Iterate through the array with the right pointer
  for (let right = 1; right < nums.length; right++) {
    // Calculate the total increments needed to make all elements
    // in the current window equal to nums[right]
    total += (nums[right] - nums[right - 1]) * (right - left);

    // If the total increments exceed k, move the left pointer
    // to reduce the window size and the total increments
    while (total > k) {
      total -= nums[right] - nums[left];
      left++;
    }

    // Update the maximum frequency found
    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq; // Return the maximum frequency
};
