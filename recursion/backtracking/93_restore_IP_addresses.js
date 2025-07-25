// Title: _restore_IP_addresses
// LeetCode ID: 93
// Difficulty: Medium
// Tags: String, Backtracking
// Date: 2025-07-20
// Link:https://leetcode.com/problems/restore-ip-addresses/description/

/**
 * @param {string} s - Input string containing only digits
 * @return {string[]} - All valid IP addresses that can be formed
 */

// Helper function to check if a string part is a valid IP segment
function isValid(part) {
  // Leading zeros are not allowed unless the part is exactly "0"
  if (part.length > 1 && part[0] === "0") return false;

  // Convert to number and check the valid IP range
  let num = parseInt(part);
  return num >= 0 && num <= 255;
}

var restoreIpAddresses = function (s) {
  let result = [];

  // Recursive function to build valid IP addresses
  function backTrack(startIndex, partsSoFar) {
    /**
     * BASE CASE:
     * If we already have 4 parts and we've used all characters,
     * then it's a valid IP and we push it to results.
     */
    if (partsSoFar.length === 4 && startIndex === s.length) {
      result.push(partsSoFar.join(".")); // Join the 4 parts with dots
      return;
    }

    // If parts are already 4 but still chars left, it's invalid path
    if (partsSoFar.length === 4) return;

    /**
     * Try making a segment of length 1 to 3
     * Because an IP segment can't be more than 3 digits.
     */
    for (let len = 1; len <= 3; len++) {
      // Avoid overflow beyond the string length
      if (startIndex + len > s.length) break;

      // Get the substring (segment)
      let part = s.substring(startIndex, startIndex + len);

      // If segment is invalid, skip it
      if (!isValid(part)) continue;

      // Recursive call with updated index and current parts
      backTrack(startIndex + len, [...partsSoFar, part]);
    }
  }

  // Start backtracking from index 0 with an empty part list
  backTrack(0, []);

  return result;
};
