// Title: _CowsAndBulls
// LeetCode ID: 299
// Difficulty: Medium
// Tags: Hash Table
// String
// Counting
// Date: 2025-07-27
// Link: https://leetcode.com/problems/bulls-and-cows/description/?envType=problem-list-v2&envId=hash-table

var getHint = function (secret, guess) {
  let mySecret = new Map();
  let guessMap = new Map();

  for (let i = 0; i < secret.length; i++) {
    mySecret.set(i, secret[i]);
    guessMap.set(i, guess[i]);
  }

  let bulls = 0;
  let cows = 0;

  // Track frequency of unmatched characters
  let secretFreq = new Map();
  let guessFreq = new Map();

  for (let key of mySecret.keys()) {
    if (mySecret.get(key) === guessMap.get(key)) {
      bulls++;
    } else {
      // Store frequencies for non-bull characters
      secretFreq.set(
        mySecret.get(key),
        (secretFreq.get(mySecret.get(key)) || 0) + 1
      );
      guessFreq.set(
        guessMap.get(key),
        (guessFreq.get(guessMap.get(key)) || 0) + 1
      );
    }
  }

  // Count cows based on frequency overlap
  for (let [char, count] of guessFreq.entries()) {
    if (secretFreq.has(char)) {
      cows += Math.min(secretFreq.get(char), count);
    }
  }

  return bulls + "A" + cows + "B";
};
