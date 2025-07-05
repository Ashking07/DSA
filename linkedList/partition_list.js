// Title: partition_list
// LeetCode ID: 86
// Difficulty: Medium
// Tags: LL, Two-pointer
// Date: 2025-07-03
// Link: https://leetcode.com/problems/partition-list/description/?envType=problem-list-v2&envId=linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let temp = head;
  let listLessThanX = new ListNode(0);
  let listEqualOrGreaterThanX = new ListNode(0);

  let lessThanX = listLessThanX;
  let greaterThanX = listEqualOrGreaterThanX;

  while (temp) {
    if (temp.val < x) {
      lessThanX.next = temp;
      temp = temp.next;
      lessThanX = lessThanX.next;
    } else {
      greaterThanX.next = temp;
      temp = temp.next;
      greaterThanX = greaterThanX.next;
    }
  }

  greaterThanX.next = null;

  lessThanX.next = listEqualOrGreaterThanX.next;

  return listLessThanX.next;
};
