/**
 * 104 Maximum Depth of Binary Tree
 * 地址：https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 给定一个二叉树，找出其最大深度。

  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

  说明: 叶子节点是指没有子节点的节点。

  示例：
  给定二叉树 [3,9,20,null,null,15,7]，

      3
    / \
    9  20
      /  \
    15   7
  返回它的最大深度 3 
 */


 /**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
      return 0;
  }
  const res = []
  getAllLength(root, res, 1);
  return Math.max(...res);
};

function getAllLength(node, array, length) {
  if (!node.left && !node.right) { // 得到一条路径数据
      array.push(length);
      return
  }
  if (node.left) {
     getAllLength(node.left, array, length+1) 
  }
  if (node.right) {
      getAllLength(node.right, array, length+1) 
  }
  return
}