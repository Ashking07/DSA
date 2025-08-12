// Title: 735_AsteriodCollision
// LeetCode ID:  735
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 && // Top is moving right
      curr < 0 // Current is moving left
    ) {
      let top = stack[stack.length - 1];
      if (Math.abs(top) < Math.abs(curr)) {
        stack.pop(); // Destroy top, continue checking
        continue;
      } else if (Math.abs(top) === Math.abs(curr)) {
        stack.pop(); // Both destroyed
        curr = 0; // Current also gone
        break;
      } else {
        curr = 0; // Current destroyed
        break;
      }
    }

    if (curr !== 0) {
      stack.push(curr);
    }
  }

  return stack;
};
