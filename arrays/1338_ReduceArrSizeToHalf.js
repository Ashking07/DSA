// Title: _ReduceArrSizeToHalf
// LeetCode ID: 1338
// Difficulty: Med
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems/reduce-array-size-to-the-half/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let myMap = new Map();

  for (let num of arr) {
    if (myMap.has(num)) {
      let val = myMap.get(num);
      myMap.set(num, val + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  let countArr = [];

  for (let key of myMap.keys()) {
    countArr.push(myMap.get(key));
  }

  countArr.sort((a, b) => b - a);
  let n = Math.floor(arr.length / 2);
  let removed = 0,
    res = 0;

  for (let i = 0; i < countArr.length; i++) {
    if (removed >= n) {
      break;
    }
    removed += countArr[i];
    res++;
  }

  return res;
};
