// Title: next_permutation
// LeetCode ID: 31
// Difficulty: Medium
// Tags: Array
// Two Pointers
// Date: 2025-06-23
// Link:https://leetcode.com/problems/next-permutation/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }

      //Reverse the rest of the array from i+1 to end
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
      }
      return;
    }
  }
  // ✅ If no swap was made, reverse entire array to get lowest permutation
  nums.reverse();
};

/*
🧠 What Is It Asking For?
You're given an array like [1, 2, 3], and you need to rearrange it in-place into its next lexicographical 
permutation (just like in a dictionary).

If it's already the highest (like [3,2,1]), then return the smallest (i.e. sorted ascending).

🪜 Minimal Guidance (Key Steps in Natural Language):
Find the first decrease:

Traverse from the right and find the first index i such that nums[i] < nums[i + 1].

This is the "breaking point" from where the current sequence becomes descending — and you can make a bigger number.

If no such i found:

You’re at the last permutation. Just reverse the array to get the first permutation.

Otherwise, find the smallest number just larger than nums[i] to its right:

Let’s say it’s nums[j]. Swap nums[i] and nums[j].

Finally, reverse everything after i (i.e., nums[i+1:]) to get the next smallest permutation.

🧠 Think of an Example:
Let’s take [1, 2, 3, 6, 5, 4]:

Step 1: Go from the right — 3 < 6, so i = 2

Step 2: Find number just bigger than 3 to its right → 4

Step 3: Swap 3 and 4 → [1,2,4,6,5,3]

Step 4: Reverse right of i = 2 → [1,2,4,3,5,6]

Boom 💥 You get the next permutation.

❗️Constraints Reminder:
You must do this in-place.

Use constant extra space → no .slice(), no new arrays.


*/
