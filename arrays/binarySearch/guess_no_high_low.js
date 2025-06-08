// Title: guess_number_high_low
// LeetCode ID: 374
// Difficulty: Easy
// Tags:Binary Search
// Interactive
// Date: 2025-06-08
// Link:https://leetcode.com/problems/guess-number-higher-or-lower/description/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guessed = guess(mid);

    if (guessed === 0) {
      return mid;
    } else if (guessed === -1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};
