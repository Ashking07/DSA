// Title: find_kth_ch_from_string_game_II
// LeetCode ID: 3307
// Difficulty: Hard
// Tags:Math
// Bit Manipulation
// Recursion
// Date: 2025-07-04
// Link: https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/description/?envType=daily-question&envId=2025-07-04

/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k, operations) {
  let len = 1;

  //Till this index of operations only we need to care as after this the string length exceeds our needed K
  let lastUsefulIndex = 0;

  //Every time the len of the string doubles, irrespective of the operation
  for (let i = 0; i < operations.length; i++) {
    len *= 2;

    if (len >= k) {
      lastUsefulIndex = i;
      break;
    }
  }

  //This keeps tracks of 1s that matters, for us to shift the character 'a' those many times forward
  let shiftCount = 0;

  //Iterating in reverse form the lastUsefulIndex
  for (let i = lastUsefulIndex; i >= 0; i--) {
    len /= 2;

    if (k > len) {
      k -= len;
      if (operations[i] === 1) {
        shiftCount++;
      }
    }
  }

  return String.fromCharCode("a".charCodeAt(0) + (shiftCount % 26));
};

// https://www.youtube.com/watch?v=sAqgGThxhes - Video Solution

// 🔍 Visual Explanation Example:
// Let’s take:

// k = 5
// operations = [0, 1]
// Initial string: 'a'

// After 0: 'aa'

// After 1: 'aabc'

// Target is 5th character → does not exist in 'aabc', but just as a flow:

// len = 1 → 2 → 4 → stop here (we cross k)

// Now go backward:

// len = 4 → 2
// k = 5 > 2 → k = 3
// operations[1] = 1 → shiftCount++

// len = 2 → 1
// k = 3 > 1 → k = 2
// operations[0] = 0 → no shiftCount

// Finally:
// shiftCount = 1
// So → return 'a'.charCode + 1 → 'b'

// 🧠 Key Concepts This Uses:
// Reversing operations: Tracing back where the character came from

// Avoids building huge strings: This gives O(log k) complexity

// Shift logic: Only count 1s when the character came from the shifted half
