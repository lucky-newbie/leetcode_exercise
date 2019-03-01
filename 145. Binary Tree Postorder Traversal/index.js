/**
 * 145. Binary Tree Postorder Traversal
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * 后续遍历
 * 左节点 -> 右节点 -> 根节点
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
 * 后续遍历：左节点 -> 右节点 ->跟节点
 */
var postorderTraversal = function(root) {
  const res = [];
  postOrder(root, res);
  return res;
};

function postOrder (node, res) {
  if (!node) {
      return
  }
  if (node.left) {
      postOrder(node.left, res)
  }
  if (node.right) {
      postOrder(node.right, res);
  }
  res.push(node.val);
  
  return
}