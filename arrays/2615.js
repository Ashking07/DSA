// Title: -
// LeetCode ID: 2615
// Difficulty:
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (myMap.has(val)) {
      let idxArr = myMap.get(val);
      idxArr.push(i);
      myMap.set(val, idxArr);
    } else {
      myMap.set(val, [i]);
    }
  }

  let res = new Array(nums.length).fill(0);

  for (let key of myMap.keys()) {
    let arr = myMap.get(key);
    if (arr.length === 1) {
      continue;
    } else {
      let prefix = new Array(arr.length).fill(0);
      prefix[0] = arr[0];
      for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
      }

      for (let i = 0; i < arr.length; i++) {
        let left = i > 0 ? i * arr[i] - prefix[i - 1] : 0;
        let right =
          prefix[arr.length - 1] - prefix[i] - (arr.length - 1 - i) * arr[i];
        res[arr[i]] = left + right;
      }
    }
  }
  return res;
};
