// Title: intersection_LL
// LeetCode ID: 160_
// Difficulty: Easy
// Tags:Hash Table
// Linked List
// Two Pointers
// Date: 2025-07-12
// Link:https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ptr1 = headA;
  let ptr2 = headB;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1 ? ptr1.next : headB;
    ptr2 = ptr2 ? ptr2.next : headA;
  }

  return ptr1;
};
