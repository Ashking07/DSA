// Title: _min_consecutive_cardsTo_pick
// LeetCode ID: 2260
// Difficulty: Medium
// Tags: Array, hashtable, sliding window
// Date: 2025-07-19
// Link:https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/

var minimumCardPickup = function (cards) {
  let map = new Map();
  let minLength = Infinity;

  for (let i = 0; i < cards.length; i++) {
    if (map.has(cards[i])) {
      minLength = Math.min(minLength, i - map.get(cards[i]) + 1);
    }
    map.set(cards[i], i);
  }

  return minLength === Infinity ? -1 : minLength;
};
