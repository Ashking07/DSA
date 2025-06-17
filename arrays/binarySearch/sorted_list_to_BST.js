// Title: sorted_list_to_BST
// LeetCode ID: 109
// Difficulty: Medium
// Tags: Array
// Divide and Conquer
// Tree
// Binary Search Tree
// Binary Tree
// Date: 2025-06-15
// Link: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let n = 0;
  let current = head;

  // Count number of nodes in the list
  while (current != null) {
    n++;
    current = current.next;
  }

  let curr = head; // shared pointer for in-order traversal

  function buildBST(start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    // Build left subtree first
    let leftChild = buildBST(start, mid - 1);

    // Now the left subtree is done, curr is at the "current" middle
    let node = new TreeNode(curr.val);
    curr = curr.next; // move to the next node in list

    // Build right subtree
    let rightChild = buildBST(mid + 1, end);

    node.left = leftChild;
    node.right = rightChild;

    return node;
  }

  return buildBST(0, n - 1);
};

// 🔑 Key Insight:
// You're not picking the mid node directly from the list.

// You're picking nodes in list order, and attaching them at the correct time during the recursion (left-root-right).

// curr is a global pointer that walks through the list sequentially, while the recursive calls build the correct BST shape.
