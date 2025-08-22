// Title: 2348_NoOfZeroes
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems//

var zeroFilledSubarray = function (nums) {
  let totalSubarrays = 0;
  let consecutiveZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    // If the current number is a zero, increment the consecutive count.
    if (nums[i] === 0) {
      consecutiveZeros++;
    } else {
      // If it's a non-zero number, it marks the end of a sequence of zeros.
      // We then calculate the number of subarrays from this sequence.
      // The formula for the sum of an arithmetic series from 1 to n is n * (n + 1) / 2.
      // This is the number of subarrays in a sequence of 'n' zeros.
      totalSubarrays += (consecutiveZeros * (consecutiveZeros + 1)) / 2;

      // Reset the consecutive zero count for the next sequence.
      consecutiveZeros = 0;
    }
  }

  // After the loop, there might be a trailing sequence of zeros.
  // We need to add the count for this final sequence as well.
  totalSubarrays += (consecutiveZeros * (consecutiveZeros + 1)) / 2;

  return totalSubarrays;
};
