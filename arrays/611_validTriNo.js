// Title: 611_validTriNo
// LeetCode ID: 611
// Difficulty: MedArray
// Two Pointers
// Binary Search
// Greedy
// Sorting
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems/valid-triangle-number/?envType=problem-list-v2&envId=array

var triangleNumber = function (nums) {
  const n = nums.length;
  let count = 0; // Initialize a counter for valid triangles

  // 1. Sort the array first. This is crucial for two reasons:
  //    a) It allows for optimization: if a <= b <= c, you only need to check a + b > c.
  //    b) It helps avoid redundant checks and simplifies the logic for distinct triplets.
  nums.sort((a, b) => a - b);

  // If there are fewer than 3 numbers, no triangles can be formed.
  if (n < 3) {
    return 0;
  }

  // 2. Use three nested loops to iterate through all unique triplets (by index).
  // The outer loop picks the first side (smallest).
  for (let i = 0; i < n - 2; i++) {
    // Skip sides with length 0, as they cannot form a valid triangle.
    // This is an optimization for the "Valid Triangle Number" problem.
    if (nums[i] === 0) {
      continue;
    }

    // The middle loop picks the second side.
    for (let j = i + 1; j < n - 1; j++) {
      // The inner loop picks the third side.
      for (let k = j + 1; k < n; k++) {
        // Now, nums[i], nums[j], and nums[k] form a triplet.
        // Since the array is sorted, nums[i] <= nums[j] <= nums[k].
        // Therefore, we only need to check the triangle inequality:
        // sum of the two smaller sides > the largest side.
        if (nums[i] + nums[j] > nums[k]) {
          count++; // If it's a valid triangle, increment the count.
        }
        // The other two conditions (nums[i] + nums[k] > nums[j] and nums[j] + nums[k] > nums[i])
        // are implicitly true because nums[k] is the largest side.
      }
    }
  }

  return count; // Return the total number of valid triangles.
};

/*
var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    const n = nums.length;

    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += (j - i); // all i..j-1 will work with j and k
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
};
 */
