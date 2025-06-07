// Title: find_first_and_last_position_of_element_in_sorted_array
// LeetCode ID: 34
// Difficulty: Medium
// Tags: Array, Binary Search
// Date: 2025-06-07
// Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let firstOfTarget = binarySearch(nums, target, true);
  let lastOfTarget = binarySearch(nums, target, false);

  function binarySearch(nums, target, findFirst) {
    let low = 0;
    let high = nums.length - 1;
    let result = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        result = mid;

        if (findFirst) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return result;
  }

  return [firstOfTarget, lastOfTarget];
};

/*
🔁 Classic Binary Search Pattern
🔹 Standard template:

let low = 0, high = arr.length - 1;
while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
This is used when you want the exact index of a target.

🧠 But what if you want...?
Goal	Adjustment
First occurrence of a number	On match: high = mid - 1, store result = mid
Last occurrence of a number	On match: low = mid + 1, store result = mid
Insert position / lower bound	Same as first occurrence, but without checking for equality
Upper bound / first greater element	Slight variation: check for arr[mid] > target, adjust result
Minimum value that satisfies a condition	Binary search on range, conditionally update high = mid
Rotated sorted array	Need to check mid relation to nums[low] or nums[high]

🔥 A Simple Mnemonic: L-H-M-R
Low

High

Mid

Update Result if condition is met

🔹 Then decide:

Is the target to the left or right?

Do I want to keep searching after I found something?

✨ Practical Tip for Mastery
For each new binary search sum:

Ask: "What am I searching for — an exact match? a boundary? a condition?"

Stick to the low, high, mid, and result structure

Try to simulate 2-3 iterations by hand


*/
