// Title: sorted_arr_to_bst
// LeetCode ID: 108
// Difficulty: Easy
// Tags: Array
// Divide and Conquer
// Tree
// Binary Search Tree
// Binary Tree
// Date: 2025-06-15
// Link:https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/?envType=problem-list-v2&envId=array

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function buildBST(start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = buildBST(start, mid - 1);
    node.right = buildBST(mid + 1, end);

    return node;
  }

  return buildBST(0, nums.length - 1);
};
