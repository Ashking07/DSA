// Title: _sort_int_byNumberof1bits
// LeetCode ID: 1356
// Difficulty: Easy
// Tags: Array
// Bit Manipulation
// Sorting
// Counting
// Biweekly Contest 20
// Date: 2025-07-30
// Link:https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/?envType=problem-list-v2&envId=sorting

//Intresting way to make use of inbuilt sort function!

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function decimalToBinary(decimalNumber) {
  let binaryString = decimalNumber.toString(2);

  let onesCount = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "1") {
      onesCount++;
    }
  }
  return onesCount;
}

var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const onesCountA = decimalToBinary(a);
    const onesCountB = decimalToBinary(b);

    if (onesCountA !== onesCountB) {
      return onesCountA - onesCountB;
    }

    return a - b;
  });

  return arr;
};
