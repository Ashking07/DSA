// Title: 38_CountAndSay
// LeetCode ID: 38
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

function getReduced(n) {
  let s = String(n);
  let reduced = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      count++;
    } else {
      reduced += count + s[i]; // add count + digit
      count = 1; // reset for next run
    }
  }

  return reduced;
}

var countAndSay = function (n) {
  let reduced = "1"; // base case always "1"
  for (let i = 1; i < n; i++) {
    reduced = getReduced(reduced);
  }
  return reduced;
};
