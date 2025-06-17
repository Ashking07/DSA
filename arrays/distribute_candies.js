// Title: distribute_candies
// LeetCode ID: 575
// Difficulty: Easy
// Tags: Array, HashTable
// Date: 2025-06-17
// Link: https://leetcode.com/problems/distribute-candies/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let map = {};
  let canEatOnly = candyType.length / 2;
  let maxTypeOfCandy = 0;

  for (candy of candyType) {
    map[candy] = map[candy] + 1 || 1;
  }

  const typeOfCandies = Object.keys(map).length;

  if (canEatOnly >= typeOfCandies) {
    maxTypeOfCandy = typeOfCandies;
    return maxTypeOfCandy;
  } else if (canEatOnly < typeOfCandies) {
    maxTypeOfCandy = canEatOnly;
    return maxTypeOfCandy;
  }
};
