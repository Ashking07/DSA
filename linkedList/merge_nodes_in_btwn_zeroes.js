// Title: merge_nodes_in_btwn_zeroes
// LeetCode ID:2181
// Difficulty: Medium
// Tags: Linked List
// Simulation
// Date: 2025-07-01
// Link: https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let temp = head;
  let curr = head;

  while (curr && curr.next !== null) {
    let accumulated = 0;

    while (curr.val !== 0) {
      accumulated = accumulated + curr.val;
      curr = curr.next;
    }
    temp.val = accumulated;
    accumulated = 0;
    curr = curr.next;
    temp = temp.next;
  }
  temp.next = null;

  function removeLast() {
    let current = head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  removeLast();

  return head.next;
};
