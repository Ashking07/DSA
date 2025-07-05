// Title: find_kth_ch_from_string_game_I
// LeetCode ID: 3304
// Difficulty: Easy
// Tags:Math
// Bit Manipulation
// Recursion
// Simulation
// Date: 2025-07-04
// Link:https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k, result = "a") {
  if (result.length >= k) return result.charAt(k - 1);
  //k-1 coz 1 <= k <= 500 in constraints

  let tempStr = "";

  for (let ch of result) {
    // Ensure wraparound from 'z' back to 'a'
    let nextCode = ch.charCodeAt(0) + 1;
    if (nextCode > 122) nextCode = 97; // ASCII 'z' + 1 → 'a'
    let nextCh = String.fromCharCode(nextCode);
    tempStr += nextCh;
  }

  return kthCharacter(k, result + tempStr);
  //Here we are saying, I (the original function), will be returning what this (copy) version of me with
  //updated input gives, and this goes on until a base case is hit. That is when the final expected result
  //by some copy of this function is bubbled up back to this original function by many such copy functions.
};
