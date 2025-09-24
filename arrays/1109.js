// Title: Corporate Flight Bookings
// LeetCode ID: 1109
// Difficulty: Medium
// Tags: Array, Hash Table
// Date: 2025-09-16
// Link: https://leetcode.com/problems/corporate-flight-bookings/

// /**
//  * @param {number[][]} bookings
//  * @param {number} n
//  * @return {number[]}
//  */
// var corpFlightBookings = function(bookings, n) {
//     bookings.sort((a,b)=> a[0] - b[0])
//     let myMap = new Map()

//     for(let i = 0; i < bookings.length; i++){
//         let start = bookings[i][0]
//         let end = bookings[i][1]
//         let seats = bookings[i][2]
//         for(let i = start; i <= end; i++){
//             if(myMap.has(i)){
//                 let val = myMap.get(i)
//                 myMap.set(i,val+seats)
//             }else{
//                 myMap.set(i,seats)
//             }
//         }
//     }

//     let resArr = []

//     for(let key of myMap.keys()){
//         let total = myMap.get(key)
//         resArr.push(total)
//     }

//     return resArr
// };

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let resArr = new Array(n).fill(0);

  // apply difference array trick
  for (let i = 0; i < bookings.length; i++) {
    let start = bookings[i][0];
    let end = bookings[i][1];
    let seats = bookings[i][2];

    resArr[start - 1] += seats; // add seats at start
    if (end < n) {
      resArr[end] -= seats; // remove seats after end
    }
  }

  // prefix sum to fill result
  for (let i = 1; i < n; i++) {
    resArr[i] += resArr[i - 1];
  }

  return resArr;
};
