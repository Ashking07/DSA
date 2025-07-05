// Title: sort_list
// LeetCode ID: 148
// Difficulty: Medium
// Tags: Linked List
// Two Pointers
// Divide and Conquer
// Sorting
// Merge Sort
// Date: 2025-07-01
// Link:https://leetcode.com/problems/sort-list/description/

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
var sortList = function (head) {
  if (!head || !head.next) return head;

  // //Sorting list like in array
  // let swapped

  // do{
  //     swapped = false
  //     let curr = head
  // while (curr && curr.next){
  //     if(curr.val > curr.next.val){
  //         let temp = curr.val
  //         curr.val = curr.next.val
  //         curr.next.val = temp
  //         swapped = true
  //     }
  //     curr = curr.next
  // }
  // }while(swapped)

  function merge(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
  }

  let slow = head,
    fast = head,
    prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  const left = sortList(head);
  const right = sortList(slow);

  return merge(left, right);
};
