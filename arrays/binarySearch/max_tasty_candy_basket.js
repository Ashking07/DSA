// Title: max_tastiness_of_candy_basket
// LeetCode ID: 2517
// Difficulty: Medium
// Tags:Array
// Binary Search
// Greedy
// Sorting
// Date: 2025-06-22
// Link: https://leetcode.com/problems/maximum-tastiness-of-candy-basket/description/

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);

  //Used Greedy
  function canPickKWithDiffAtLeast(price, k, minDiff) {
    let count = 1;
    let lastPicked = price[0];

    for (let i = 1; i < price.length; i++) {
      if (price[i] - lastPicked >= minDiff) {
        count++;
        lastPicked = price[i];
      }
    }
    return count >= k;
  }

  let left = 0;
  let right = price[price.length - 1] - price[0];
  let answer = 0;

  //Used binary search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canPickKWithDiffAtLeast(price, k, mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

/*
The maximumTastiness function aims to find the maximum possible "tastiness" of a basket of k distinct 
items from a given price[] array, where tastiness is defined as the minimum absolute difference between 
any two chosen items. To solve this, we first sort the price array, which makes it easier to reason about 
differences between elements. Then, we apply binary search over the range of possible tastiness values, from 
0 to the maximum difference (price[price.length - 1] - price[0]). For each mid-value in the binary search, 
we check — using a greedy approach — whether it's possible to pick k items such that every item differs from 
the last picked one by at least that mid (tastiness). This is done in the canPickKWithDiffAtLeast function, 
which starts with the first item and keeps picking the next item only if the gap is at least minDiff. If we 
can successfully pick k items with a given minDiff, we try for an even larger difference (moving left up); otherwise, 
we shrink the range (right down). This continues until the search space is exhausted, and the answer holds the 
maximum tastiness that satisfies the condition. It's a perfect mix of greedy selection to validate a condition 
and binary search to optimize for the best possible minimum gap — a classic binary search on the answer pattern.
*/
