/**
 * 938. Range Sum of BST
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
  二叉搜索树保证具有唯一的值。

  示例 1：

  输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
  输出：32
  示例 2：

  输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
  输出：23
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
// 二叉搜索树， 左节点的值小于根结点的值，右节点的值都大于根结点的值
var rangeSumBST = function(root, L, R) {
  if (!root) {
      return 0;
  }
  let res = 0;
  return getSum(root, L, R, 0);
  
};
function getSum(node, l, r, res) {
  
  if (node && (node.val >= l && node.val <= r)) { // 题目包含左右节点
      res += node.val;
  }
  if (node.left) {
      res = getSum(node.left, l, r, res) 
  }
  if (node.right) {
      res = getSum(node.right, l, r, res) 
  }
  return res;
}