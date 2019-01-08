/**
 * 814. Binary Tree Pruning
 * 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
  返回移除了所有不包含 1 的子树的原二叉树。

  ( 节点 X 的子树为 X 本身，以及所有 X 的后代。)

  示例1:
  输入: [1,null,0,0,1]
  输出: [1,null,0,null,1]
  
  解释: 
  只有红色节点满足条件“所有不包含 1 的子树”。
  右图为返回的答案。

  示例2:
  输入: [1,0,1,0,0,0,1]
  输出: [1,null,1,null,1]
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
 */
var pruneTree = function(root) {
  
     return findNode(root);
 };
 
 function findNode(node) {
    if (!node) {
         return null
     }
     node.right = findNode(node.right);
     node.left = findNode(node.left);
     if (node.val === 0 && !node.left && !node.right) {
         return null;
     }
     return node;
 }