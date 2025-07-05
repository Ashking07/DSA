// Title: add_two_numbers
// LeetCode ID: 2
// Difficulty: Medium
// Tags: Linked List
// Math
// Recursion
// Date: 2025-07-02
// Link: https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=linked-list

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

//Long sol - this can be an example of batch processing where we first process both the LL, sum them, then create the new LL in 1 go in the end
var addTwoNumbers = function (l1, l2) {
  let number1 = "";
  let number2 = "";

  let temp1 = l1;
  let temp2 = l2;

  // Build the number by prepending so it's in correct order
  while (temp1) {
    number1 = temp1.val + number1;
    temp1 = temp1.next;
  }

  while (temp2) {
    number2 = temp2.val + number2;
    temp2 = temp2.next;
  }

  // Perform digit-by-digit addition (like paper addition)
  let carry = 0;
  let finalResult = "";
  let i = number1.length - 1;
  let j = number2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? parseInt(number1[i]) : 0;
    let digit2 = j >= 0 ? parseInt(number2[j]) : 0;

    let sum = digit1 + digit2 + carry;
    finalResult += sum % 10;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  // finalResult is reversed at this point
  let dummy = new ListNode(0);
  let current = dummy;

  for (let ch of finalResult) {
    current.next = new ListNode(parseInt(ch));
    current = current.next;
  }

  return dummy.next;
};

//REFER TO THE RECURSION learning.txt for more clarity for this version of the solution
//Optimal Sol - this can be an example of stream processing where each new node of the new LL is being processed as we go forward
// function addTwoNumbers(l1, l2, carry = 0) {
//   if (!l1 && !l2 && carry === 0) return null;

//   let val1 = l1 ? l1.val : 0;
//   let val2 = l2 ? l2.val : 0;

//   let sum = val1 + val2 + carry;
//   let newNode = new ListNode(sum % 10);

//   let next1 = l1 ? l1.next : null;
//   let next2 = l2 ? l2.next : null;
//   newNode.next = addTwoNumbers(next1, next2, Math.floor(sum / 10));

//   return newNode;
// }
