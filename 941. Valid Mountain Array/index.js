/**
 * leetcode 941. Valid Mountain Array
 * 地址：https://leetcode.com/problems/valid-mountain-array/description/
 * 介绍：
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。 让我们回顾一下，
 * 如果 A 满足下述条件，那么它是一个山脉数组：

    A.length >= 3
    在 0 < i < A.length - 1 条件下，存在 i 使得：
    A[0] < A[1] < ... A[i-1] < A[i]
    A[i] > A[i+1] > ... > A[B.length - 1]
 *
 *  示例 1：
    输入：[2,1]
    输出：false

    示例 2：
    输入：[3,5,5]
    输出：false

    示例 3：
    输入：[0,3,2,1]
    输出：true
 */
// 满足条件： 1.数组长度>=3；2.存在一个i元素， i元素前面的都小于i元素， 并且i元素后面的都大于i元素
var validMountainArray = function(A) {
  if (!A || A.length < 3) {
      return false
  }
  let position = 1;
  let pre = A[0];
  let asce = 0; // 升序个数
  let des = 0; // 将序个数
  while (pre < A[position]) {
      pre =  A[position];
      position++;
      asce++;
  }
  while(pre > A[position]) {
      pre =  A[position];
      position++;
      des++;
  }
  if (position === A.length && asce > 0 && des > 0) {
      return true
  }
  return false
};