// Title: _deleteCh_toMake_FancyStr
// LeetCode ID: 1957
// Difficulty: Easy
// Tags: String
// Date: 2025-07-21
// Link: https://leetcode.com/problems//

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let result = "";
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count < 3) {
      result += s[i];
    }
  }
  return s[0] + result;

  // let newStr = ""
  // function remove3Consecutives(s,count){
  //     for(let i = count; i < s.length; i++){
  //     if(s[i] === s[i-1] && s[i] === s[i+1]){
  //         newStr = s.replace(s[i], "")
  //         remove3Consecutives(newStr,count++)
  //     }
  // }
  // }
  // remove3Consecutives(s,s.length)

  // return newStr
};
