// Title: _ReorderPowerOf2
// LeetCode ID: 869
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

var reorderedPowerOf2 = function (n) {
  let digits = String(n).split("");
  let mySet = new Set();
  let used = Array(digits.length).fill(false);

  function backtrack(path) {
    if (path.length === digits.length) {
      if (path[0] !== "0") {
        // avoid leading zero
        mySet.add(Number(path.join("")));
      }
      return;
    }
    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(digits[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);

  for (let num of mySet) {
    if ((num & (num - 1)) === 0) return true; // check power of 2
  }
  return false;
};
