/**
 * 144. Binary Tree Preorder Traversal
 * 地址：https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 * 介绍：
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example:
 * Input: [1,null,2,3]
   1
    \
     2
    /
   3

   Output: [1,2,3]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
* 利用栈数据结构递归树
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) {
      return []
  }
  const stackArray = [root];
  const result = [];
  while(stackArray.length > 0) {
      const node = stackArray.pop();  // 将栈顶元素弹出栈
      result.push(node.val);
      // 栈为先进后出，此为前序遍历， 跟节点->左子树->右子树， 所以应先放入右节点
      // 中序遍历：左子树---> 根结点 ---> 右子树
      // 后序遍历：左子树 ---> 右子树 ---> 根结点
      if (node.right) { // 判断是否有右子树，节点进栈
          stackArray.push(node.right);
      }
      if (node.left) { // 判断当前节点是否有左子树，节点进栈
          stackArray.push(node.left)
      }
  }
  return result;
};