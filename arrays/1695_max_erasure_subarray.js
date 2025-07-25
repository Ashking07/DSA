// Title: _max_erasure_value
// LeetCode ID: 1695
// Difficulty: Medium
// Tags: Array,HashTable, sliding window
// Date: 2025-07-19
// Link:https://leetcode.com/problems/maximum-erasure-value/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
🧠 Mental Model:
You’re stretching a rubber band (your window) to include unique values.
Whenever you hit a duplicate, you shrink it from the left just enough to make it 
valid again — all while tracking the current sum.
 */
var maximumUniqueSubarray = function (nums) {
  let result = 0;

  let left = 0;
  let right = 0;
  let mySet = new Set();

  let sum = 0;
  while (right < nums.length) {
    if (!mySet.has(nums[right])) {
      mySet.add(nums[right]);
      sum += nums[right];
      right++;
    } else {
      while (mySet.has(nums[right])) {
        mySet.delete(nums[left]);
        sum -= nums[left];
        left++;
      }
    }

    result = Math.max(result, sum);
  }

  return result;
};

//INEFFICIENT - O(n^2)
// function calculateSumOfSet(set){
//         let sum = 0
//         for(const el of set){
//             sum += el;
//         }
//         return sum
// }

// let i = 0
// while(i < nums.length){
//     let tempSum = new Set()
//     tempSum.add(nums[i])

//     for(let j = i+1; j < nums.length; j++){
//         if(!tempSum.has(nums[j])){
//             tempSum.add(nums[j])
//         }else{
//             let sum = calculateSumOfSet(tempSum)
//             result = Math.max(result,sum)
//             tempSum.clear()
//             break
//         }
//     }

//     let sum = calculateSumOfSet(tempSum)
//     result = Math.max(result,sum)
//     tempSum.clear()
//     i++
// }
