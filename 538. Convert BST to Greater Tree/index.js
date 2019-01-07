/**
 * 538. Convert BST to Greater Tree
 * 给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。
  例如：
  输入: 二叉搜索树:
                5
              /   \
            2     13

  输出: 转换为累加树:
              18
              /   \
            20     13
 */

 /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  
let sum = 0;
   const update = node => {
       if(!node) return null;
   update(node.right);
       sum = node.val += sum;
       update(node.left);
   }
   update(root);
   return root;
}