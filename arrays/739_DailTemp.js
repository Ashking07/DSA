// Title: 739_DailTemp
// LeetCode ID: 739
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {
//     let result = []
//     let n = temperatures.length

//     for(let i = 1; i < n; i++){
//         let remainingDays = n - i

//         let currDay = temperatures[i]
//         let prevDay = temperatures[i - 1]

//         if(currDay > prevDay){
//             result.push(1)
//         }else if(currDay < prevDay){
//             let diff = prevDay - currDay
//             if(remainingDays > diff){
//                 result.push(diff)
//             }else{
//                 result.push(0)
//             }
//         }
//     }

//     result.push(0)

//     return result
// };

// var dailyTemperatures = function(temperatures) {
//     let result = []
//     let n = temperatures.length

//     for(let i = 0; i < n - 1; i++){
//         let firstTemp = temperatures[i]
//         let secondTemp = temperatures[i+1]

//         if(secondTemp > firstTemp){
//             result.push(1)
//         }else{
//             let j = i + 1
//             while (j < n && temperatures[j] <= temperatures[i]){
//                 j++
//             }
//             if(j === n){
//                 result.push(0)
//             }else{
//             result.push(j-i)
//             }
//         }
//     }

//     result.push(0)
//     return result
// }

var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let result = new Array(n).fill(0);
  let stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
};
