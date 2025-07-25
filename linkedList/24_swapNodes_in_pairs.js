// Title: swapNodes_in_pairs
// LeetCode ID: 24_
// Difficulty: Medium
// Tags:Linked List
// Recursion
// Date: 2025-07-21
// Link:https://leetcode.com/problems/swap-nodes-in-pairs/description/

var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next !== null && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;

    // Swapping
    first.next = second.next;
    second.next = first;
    current.next = second;

    // Move to the next pair
    current = first;
  }

  return dummy.next;
};
