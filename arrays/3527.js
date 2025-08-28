// Title:
// LeetCode ID: 3527
// Difficulty:
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function (responses) {
  let myMap = new Map();

  for (let i = 0; i < responses.length; i++) {
    let mySet = new Set(responses[i]);

    for (let word of mySet) {
      if (myMap.has(word)) {
        myMap.set(word, myMap.get(word) + 1);
      } else {
        myMap.set(word, 1);
      }
    }
  }

  console.log(myMap);

  let res = "";
  let count = 0;

  for (let key of myMap.keys()) {
    let val = myMap.get(key);
    if (val > count) {
      res = key;
      count = val;
    } else if (val === count) {
      let arr = [res, key];
      res = arr.sort()[0];
      // res = res < key ? res : key
    }
  }

  return res;
};
