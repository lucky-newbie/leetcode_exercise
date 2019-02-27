/**
 * 94. Binary Tree Inorder Traversal
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 中序遍历
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
 * @return {number[]}
 */
// 中序遍历， 左节点->根节点->右节点
var inorderTraversal = function(root) {
  const res = [];
  inOrder(root, res);
  return res;
};

function inOrder(root, res) {
  if (!root) {
      return
  }
  if (root.left) {
      inOrder(root.left, res);
  }
  res.push(root.val);
  if (root.right) {
     inOrder(root.right, res)
  }
  return;
}