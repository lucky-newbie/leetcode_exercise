/**
 * leetcode 700. Search in a Binary Search Tree
 * https://leetcode.com/problems/search-in-a-binary-search-tree/description/
 * 
 * 介绍：
 * Given the root node of a binary search tree (BST) and a value. 
 * You need to find the node in the BST that the node's value equals the
 * given value. Return the subtree rooted with that node. 
 * If such node doesn't exist, you should return NULL.
 * 
 * example：
 * Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
 * 
 * return ：
 *    2     
     / \   
    1   3
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) {
      return null;
  }
  if (root.val === val) {
      return root
  }
  if (root.left !== null) { // 由于未找到时返回的是空数组，所以需要在判断返回的是节点还是空数组
      const left = searchBST(root.left, val);
      if (left && left.val) {
          return left
      }
  }
  if (root.right !== null) { // 由于未找到时返回的是空数组，所以需要在判断返回的是节点还是空数组
      const right = searchBST(root.right, val);
      if (right && right.val) {
          return right;
      }
  }
  return []
};