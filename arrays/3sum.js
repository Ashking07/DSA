// Title: 3sum
// LeetCode ID: 15
// Difficulty: Medium
// Tags: Arrays, 2-pointer, sorting
// Date: 2025-06-13
// Link: https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort array for two-pointer technique

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Sorted nums = [-4, -1, -1, 0, 1, 2]

// 🔁 Outer Loop i = 0, nums[i] = -4
// Left = 1 (-1), Right = 5 (2)

// Sum = -4 + (-1) + 2 = -3 → Too small → Move left → left = 2

// Sum = -4 + (-1) + 2 = -3 → Again too small → left = 3

// Sum = -4 + 0 + 2 = -2 → Still too small → left = 4

// Sum = -4 + 1 + 2 = -1 → Still too small → left = 5

// left = right, loop ends

// 🔁 Outer Loop i = 1, nums[i] = -1
// Left = 2 (-1), Right = 5 (2)

// Sum = -1 + (-1) + 2 = 0 ✅ Match → Push [-1, -1, 2]

// Skip duplicates → left = 3, right = 4

// Sum = -1 + 0 + 1 = 0 ✅ Match → Push [-1, 0, 1]

// Skip duplicates → left = 4, right = 3 → Done

// 🔁 Outer Loop i = 2, nums[i] = -1
// Duplicate of previous nums[i] = -1, so we continue

// 🔁 Outer Loop i = 3, nums[i] = 0
// Left = 4 (1), Right = 5 (2)

// Sum = 0 + 1 + 2 = 3 → Too large → Move right = 4

// left >= right, end

// 🔚 Final Output:
// [[-1, -1, 2], [-1, 0, 1]]

//Mental Pattern Model
// sort(nums)
// for i in nums:
//    skip duplicates
//    left = i+1, right = end
//    while (left < right):
//        sum = nums[i] + nums[left] + nums[right]
//        if sum < 0 → left++
//        if sum > 0 → right--
//        if sum == 0 → store result, skip dupes, move pointers

// Think of this like:
// target = -nums[i]
// Find left and right such that nums[left] + nums[right] === target
