/**
 * leetcode 103. Binary Tree Zigzag Level Order Traversal（102 类似)
 * 地址：https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 * 介绍：
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }
  let result = [];
  const queArray = [{info: root, level: 0}];
  while(queArray.length > 0) {
      let node = queArray.pop();
      const value = node.info.val;
      const level = node.level;
      if (level === result.length) {
          result[level] = [];
      }
      result[level].push(value);
      if (node.info.right) {
          queArray.push({info: node.info.right, level: level + 1})
      }
      if (node.info.left) {
          queArray.push({info: node.info.left, level: level + 1})
      }
  }
  
  // 基数反转，偶数不动
  result = result.map((item, index) => {
      if (index % 2 === 0) {
          return item;
      } else {
          return item.reverse();
      }
  })
  
  return result;
};