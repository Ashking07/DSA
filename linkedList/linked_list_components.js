// Title: linked_list_components
// LeetCode ID: 817
// Difficulty: Medium
// Tags: Array
// Hash Table
// Linked List
// Date: 2025-07-01
// Link: https://leetcode.com/problems/linked-list-components/description/?envType=problem-list-v2&envId=array

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let temp = head;
  let count = 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  while (temp) {
    let value = temp.val;

    if (map.hasOwnProperty(value)) {
      if (temp.next) {
        while (temp.next && map.hasOwnProperty(temp.next.val)) {
          temp = temp.next;
          continue;
        }
      }
      count++;
    }

    temp = temp.next;
  }

  return count;
};
