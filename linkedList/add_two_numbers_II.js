// Title: add_two_numbers_II
// LeetCode ID: 445
// Difficulty:Medium
// Tags: Linked List
// Math
// Stack
// Date: 2025-07-02
// Link:https://leetcode.com/problems/add-two-numbers-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let number1 = "";
  let number2 = "";

  let temp1 = l1;
  let temp2 = l2;

  while (temp1) {
    number1 += temp1.val;
    temp1 = temp1.next;
  }

  while (temp2) {
    number2 += temp2.val;
    temp2 = temp2.next;
  }

  let reversed1 = number1.split("").reverse();
  let reversed2 = number2.split("").reverse();

  let carry = 0;
  let finalResult = [];
  let i = 0;

  while (i < reversed1.length || i < reversed2.length || carry > 0) {
    let digit1 = i < reversed1.length ? parseInt(reversed1[i]) : 0;
    let digit2 = i < reversed2.length ? parseInt(reversed2[i]) : 0;

    let sum = digit1 + digit2 + carry;
    finalResult.push(sum % 10);
    carry = Math.floor(sum / 10);

    i++;
  }

  let dummy = new ListNode(0);
  let current = dummy;

  finalResult.reverse();

  for (let ch of finalResult) {
    current.next = new ListNode(parseInt(ch));
    current = current.next;
  }

  return dummy.next;
};
