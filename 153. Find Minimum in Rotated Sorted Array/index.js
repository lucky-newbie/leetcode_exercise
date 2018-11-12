/**
 * 153. Find Minimum in Rotated Sorted Array
 * 地址：https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * 介绍：
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
  ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
  请找出其中最小的元素。
  你可以假设数组中不存在重复元素。

  示例 1:
  输入: [3,4,5,1,2]
  输出: 1

  示例 2:
  输入: [4,5,6,7,0,1,2]
  输出: 0
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums || nums.length === 0) {
      return null
  }
  // 利用Math.min方法查找数组中的最小元素
  return Math.min(...nums)
};