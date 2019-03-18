/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 3
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const res = [];
  preOrder(root, res);
  if (k - 1 < 0 || k - 1 > res.length) {
      return null
  }
  console.log(res)
  return res[k - 1]
};

function preOrder (node, res) {
  if (!node) {
      return
  }
  if (node.left) {
      preOrder(node.left, res)
  }
  res.push(node.val)
  if (node.right) {
      preOrder(node.right, res)
  }
  return res;
}
