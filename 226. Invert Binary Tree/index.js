/**
 * leetcode 226. Invert Binary Tree
 * 地址：https://leetcode.com/problems/invert-binary-tree/description/
 * 介绍：Invert a binary tree.
 * 
 * Example:
 * 
 * Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 
 * 使用递归处理该问题；
 */
var invertTree = function(root) {
  if (!root) {
      return null;
  }
  invertTree(root.left); // 递归调用该方法，将做节点进入系统栈，
  invertTree(root.right);
  let tempNode = root.right; // 交换左右节点
  root.right = root.left;
  root.left = tempNode;
  return root;
};