// Title: Next Greater Node In Linked List
// LeetCode ID: 1019
// Difficulty: Medium
// Tags: Stack, Linked List
// Date: 2025-09-16
// Link: https://leetcode.com/problems/next-greater-node-in-linked-list/

//give code
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const result = new Array(values.length).fill(0);
  const stack = [];

  for (let i = 0; i < values.length; i++) {
    while (stack.length && values[i] > values[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = values[i];
    }
    stack.push(i);
  }

  return result;
};
