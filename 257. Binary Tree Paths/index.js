/**
 * leetcode  257. Binary Tree Paths
 * 地址：https://leetcode.com/problems/binary-tree-paths/description/
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
 * @return {string[]}
 * 递归实现， 跟节点到叶子节点之间路径
 */
var binaryTreePaths = function(root) {
  let resultArray = [];
  if (root === null ) {
      return resultArray;
  }
  
  if (root.left === null && root.right === null) {
      resultArray.push(root.val.toString());
      return resultArray;
  };
  const leftArray = binaryTreePaths(root.left);
  for (let i = 0, l = leftArray.length; i<l; i++) {
      resultArray.push(root.val + '->' + leftArray[i])
  }
  const rightArray = binaryTreePaths(root.right);
  for (let i = 0, l = rightArray.length; i<l; i++) {
      resultArray.push(root.val + '->' + rightArray[i])
  }
  return resultArray;
};