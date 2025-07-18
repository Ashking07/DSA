// Title: finding_pairs_with_certain_sum
// LeetCode ID: 1865
// Difficulty:  Medium
// Tags: Array, Hashtable, Design
// Date: 2025-07-07
// Link: https://leetcode.com/problems/finding-pairs-with-a-certain-sum/description/?envType=daily-question&envId=2025-07-06

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.arr1 = nums1;
  this.arr2 = nums2;

  this.countNums2 = {};

  for (let num of nums2) {
    this.countNums2[num] = (this.countNums2[num] || 0) + 1;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  let oldVal = this.arr2[index];
  this.countNums2[oldVal]--;
  if (this.countNums2[oldVal] === 0) delete this.countNums2[oldVal];

  this.arr2[index] += val;

  let newVal = this.arr2[index];
  this.countNums2[newVal] = (this.countNums2[newVal] || 0) + 1;

  return this.arr2;
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let pairs = 0;
  for (let num of this.arr1) {
    let target = tot - num;
    if (this.countNums2[target]) {
      pairs += this.countNums2[target];
    }
  }
  return pairs;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

//Just some personal experimentation to understand classes more.
//  function findHighestFreq(nums) {
//     this.map = {}
//     this.highestNumberWithFreq = undefined

//     for(let num of nums){
//         this.map[num] = (this.map[num] || 0) + 1
//     }
// }

// findHighestFreq.prototype.findMaxFreq = function(target){
//     let max = 0

//     for (const key of Object.keys(this.map)) {
//       if(this.map[key] >= target){
//           max = Math.max(max,key)
//       }
//     }
//     console.log(max)
//     return max
// }

// let find = new findHighestFreq([1,1,1,2,2,3,3,3,4,5,5,6,6,7])

// find.findMaxFreq(3) //Will return the highest number with freq 3 or more
