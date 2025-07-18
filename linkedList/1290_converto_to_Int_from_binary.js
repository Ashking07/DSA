// Title:_converto_to_Int_from_binary
// LeetCode ID:  1290
// Difficulty: Easy
// Tags: LL, Math
// Date: 2025-07-14
// Link: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/?envType=daily-question&envId=2025-07-14

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let temp = head;

  let result = "";

  while (temp) {
    result += temp.val;
    temp = temp.next;
  }

  let decimalNumber = parseInt(result, 2);

  return decimalNumber;
};
