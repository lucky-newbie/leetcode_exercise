/**
 * 地址：https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 * 介绍：求一个二分搜索树中两个节点的最近祖先节点
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
* 二分搜索树：1.每个节点的值大于左孩子的节点值；2每个节点的值小于右孩子节点的值；3.以左右孩子节点为根的子树仍为二分搜索树
*/
/**

 * @param {TreeNode} root 跟节点
 * @param {TreeNode} p 前一个节点
 * @param {TreeNode} q 后一个节点
 * @return {TreeNode}
 * 如果p <= root && q => root, 则此时的root为q/p的最近祖先节点
 * 如果p < root && q < root, 则数据在root的左子树中，继续递归查找
 * 如果 p> root && q > root， 则数据在root的右子树中，继续递归查找
 * 此题目中确认了q/p一定在root为跟节点的树中，如果未确认，则需确认q/p是否在以root为根的树中
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
      return null;
  }
  
  if (p.val < root.val  && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q)
  }
  return root;
};