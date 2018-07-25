/**
 * leetcode 102. Binary Tree Level Order Traversal
 * 地址：https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 * 介绍：
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  const result = [];
  const queArray = [] 
  queArray.push({node: root, level: 0});// 添加一个对象，两个属性：node表示节点，level表示层级，此处初始化设置层级为0
  while (queArray.length > 0) {
      const info = queArray.pop();
      const level = info.level;
      const val = info.node.val;
      if (level === result.length) {
          result[level] = [];
      }
      result[level].push(val);
      if (info.node.right) {
          queArray.push({node: info.node.right, level: level + 1})
      }
      if (info.node.left) {
          queArray.push({node: info.node.left, level: level + 1})
      }
  }
  return result;
};