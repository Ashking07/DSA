// Title: add_strings
// LeetCode ID: 415
// Difficulty: Easy
// Tags: Math
// String
// Simulation
// Date: 2025-07-03
// Link:https://leetcode.com/problems/add-strings/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2, carry = 0, result = "") {
  if (num1.length === 0 && num2.length === 0 && carry === 0) return result;

  let val1 = num1 ? num1[num1.length - 1] : 0;
  let val2 = num2 ? num2[num2.length - 1] : 0;

  let sum = parseInt(val1) + parseInt(val2) + carry;

  result = (sum % 10) + result;

  let nextStr1 = num1.slice(0, -1);
  let nextStr2 = num2.slice(0, -1);

  return addStrings(nextStr1, nextStr2, Math.floor(sum / 10), result);
};

/*
🧠 Recursive Breakdown
We’ll walk through this like a call stack:

Call 1:
  num1 = "123", num2 = "789", carry = 0, result = ""
  val1 = 3, val2 = 9 → sum = 12 → digit = 2, carry = 1 → result = "2"
  return addStrings("12", "78", 1, "2")

Call 2:
  num1 = "12", num2 = "78", carry = 1, result = "2"
  val1 = 2, val2 = 8 → sum = 11 → digit = 1, carry = 1 → result = "12"
  return addStrings("1", "7", 1, "12")

Call 3:
  num1 = "1", num2 = "7", carry = 1, result = "12"
  val1 = 1, val2 = 7 → sum = 9 → digit = 9, carry = 0 → result = "912"
  return addStrings("", "", 0, "912")

Call 4 (Base Case):
  num1 = "", num2 = "", carry = 0, result = "912"
  return "912"
🔁 Return Path (Bubbling Up)
Each call just returns the value it received from the next recursive call — no extra logic during "unwinding".


Call 4 → returns "912"
Call 3 → returns "912"
Call 2 → returns "912"
Call 1 → returns "912"
✅ Final Answer: "912"

*/
