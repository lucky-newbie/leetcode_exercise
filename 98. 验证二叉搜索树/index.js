/**
 * 98. 验证二叉搜索树
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    示例 1:

    输入:
        2
      / \
      1   3
    输出: true
  示例 2:

    输入:
        5
      / \
      1   4
         / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

 */

var isValidBST = function(root) {
  return validate(root ,Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};
/** 递归比较所有左节点小于根结点的值，右节点的值大于根结点的值 */
function validate(node, left, right) {
  if (!node) {
      return true
  }
  if (node.val <= left || node.val >= right) {
      return false
  }
  return validate(node.left, left, node.val) && validate(node.right, node.val, right)
}