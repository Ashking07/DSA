// Title: _longestSubString_without_repeating_Ch
// LeetCode ID: 3
// Difficulty: Medium
// Tags: Hashtable, sliding window, string
// Date: 2025-07-19
// Link:https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let mySet = new Set();
  let i = 0;

  while (i < s.length) {
    let temp = 0;
    for (let j = i; j < s.length; j++) {
      if (!mySet.has(s[j])) {
        mySet.add(s[j]);
        temp++;
      } else {
        count = Math.max(count, temp);
        temp = 0;
        mySet.clear();
        break;
      }
    }
    count = Math.max(count, temp);
    i++;
  }
  return count;
};

//SLIDING WINDOW EFFICIENT SOLUTION!!!!!!

// var lengthOfLongestSubstring = function (s) {
//   let left = 0;
//   let right = 0;
//   let maxCount = 0;
//   let mySet = new Set();

//   while (right < s.length) {
//     if (!mySet.has(s[right])) {
//       mySet.add(s[right]);
//       right++;
//       maxCount = Math.max(maxCount, right - left);
//     } else {
//       mySet.delete(s[left]);
//       left++;
//     }
//   }

//   return maxCount;
// };

/*🗣️ TL;DR (ChatGPT-style summary for Ashwin)
Ashwin, think of the sliding window as a smart scanner. It keeps moving forward (with right) 
and only pushes left forward when something gets repeated — no going back. It's like “Hey, as long 
as things are unique, I’ll stretch. The moment I see a duplicate, I trim from the start!”

 */
