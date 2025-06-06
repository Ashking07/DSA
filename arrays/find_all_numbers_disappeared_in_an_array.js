// Title: Find All Numbers Disappeared in an Array
// LeetCode ID: 448
// Difficulty: Easy
// Tags: Array, HashTable
// Date: 2025-06-06
// Link:https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //USING HASMAP
  // let n = nums.length
  // let map = {}
  // let notInNums = []

  // for(let i = 1; i <= n; i++){
  //     map[i] = false
  // }

  // for(let i = 0; i < n; i++){
  //     if(map.hasOwnProperty(nums[i])){
  //         map[nums[i]] = true
  //     }
  // }

  // for(key in map){
  //     if(!map[key]){
  //         notInNums.push(Number(key))
  //     }
  // }

  // return notInNums

  //USING SET
  let seen = new Set();
  let notInNums = [];

  for (num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      notInNums.push(i);
    }
  }

  return notInNums;
};
