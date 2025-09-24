// Title: 438_findAllAnagramsInAString
// LeetCode ID: 438
// Difficulty: Medium
// Tags: Sliding Window
// Date: 2025-09-24
// Link: https://leetcode.com/problems/find-all-anagrams-in-a-string/

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function(s, p) {
//     if(p.length > s.length) return []

//     let res = []
//     let windowSize = p.length
//     let string = p.split('').sort().join('')

//     for(let i = 0; i <= s.length - p.length; i++){
//         let temp = s.slice(i,i+windowSize)
//         const sorted = temp.split('').sort().join('')
//         if(string === sorted){
//             res.push(i)
//         }
//     }

//     return res
// };

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const n = s.length,
    m = p.length;
  if (m > n) return [];
  const A = "a".charCodeAt(0);

  // diff[c] = need(c) - have(c in current window)
  const diff = Array(26).fill(0);
  for (const ch of p) diff[ch.charCodeAt(0) - A]++;

  // apply first window
  for (let i = 0; i < m; i++) diff[s.charCodeAt(i) - A]--;

  // count how many letters are mismatched (non-zero)
  let nonZero = 0;
  for (let k = 0; k < 26; k++) if (diff[k] !== 0) nonZero++;

  const res = [];
  if (nonZero === 0) res.push(0);

  // slide windows
  for (let i = 0; i < n - m; i++) {
    // remove left char
    let L = s.charCodeAt(i) - A;
    if (diff[L] === 0) nonZero++;
    diff[L]++; // we now need one more L
    if (diff[L] === 0) nonZero--;

    // add right char
    let R = s.charCodeAt(i + m) - A;
    if (diff[R] === 0) nonZero++;
    diff[R]--; // we have one more R in window
    if (diff[R] === 0) nonZero--;

    if (nonZero === 0) res.push(i + 1);
  }
  return res;
};
// https://assets.leetcode.com/users/images/4d6febe1-360f-41a5-97cc-17825fcf4a26_1744608176.9367492.png
