/**
 * leetcode 112. Path Sum
 * 地址：https://leetcode.com/problems/path-sum/description/
 * 介绍：
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 * 通过递归方式实现， 每次用sum - node.val的值，判断当前节点的左右节点，是否存在与差值相同的值，如果有，则true，否则false
 * 题目要求为跟节点到叶子节点路径下的sum值，所以当跟节点满足sum时，不符合题目要求
 *
 */
var hasPathSum = function(root, sum) {
  if (root === null) { // root === null， 则肯定不会有root.val = sum的情况
      return false;
  }
  
  if (root.left === null && root.right === null) { // 判断当前节点为叶子节点
      return root.val === sum   // 如果当前叶子节点的值与sum相同，则存在一条路径下的节点和=sum， 否在不存在
  }
  
  
  if (hasPathSum(root.left, (sum - root.val))) { // 跟节点到左节点路径下存在，则返回true;
      return true;
  }
  if (hasPathSum(root.right, (sum - root.val))) { // 跟节点到右节点路径下存在，则返回true
      return true;
  }
  return false;
};