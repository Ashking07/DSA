// Title: _BoatsToSavePeople
// LeetCode ID: 881
// Difficulty: Medium
// Tags: Array
// Two Pointers
// Greedy
// Sorting
// Weekly Contest 96
// Date: 2025-07-30
// Link: https://leetcode.com/problems/boats-to-save-people/description/?envType=problem-list-v2&envId=sorting

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  // 1. Sort the people array in ascending order of weights.
  // This allows us to easily pick the lightest and heaviest remaining people.
  people.sort((a, b) => a - b);

  let boats = 0; // Initialize the count of boats needed
  let light = 0; // Pointer for the lightest person (starts at the beginning)
  let heavy = people.length - 1; // Pointer for the heaviest person (starts at the end)

  // 2. Use two pointers to iterate and pair people.
  // The loop continues as long as the light pointer has not crossed the heavy pointer.
  while (light <= heavy) {
    // A new boat is always used for the current heaviest person (people[heavy]).
    boats++;

    // Check if the heaviest person can be paired with the lightest person.
    if (people[light] + people[heavy] <= limit) {
      // If they can fit together, both are now in a boat.
      // Move the light pointer forward to the next lightest person.
      light++;
    }
    // Whether paired or not, the heaviest person is now in a boat.
    // Move the heavy pointer backward to the next heaviest person.
    heavy--;
  }

  // 3. Return the total number of boats used.
  return boats;
};
