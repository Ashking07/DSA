// Title: _removingStarsFromStr
// LeetCode ID: 2390
// Difficulty: Med
// Tags:
// Date: 2025-08-28
// Link:https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=problem-list-v2&envId=string

var removeStars = function (s) {
  let res = [];

  for (let ch of s) {
    if (ch === "*") {
      res.pop();
    } else {
      res.push(ch);
    }
  }

  return res.join("");
};
