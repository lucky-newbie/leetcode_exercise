/**
 * 35. Search Insert Position
 * 地址：https://leetcode.com/problems/search-insert-position/description/
 * 介绍：
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

  你可以假设数组中无重复元素。

  示例 1:
  输入: [1,3,5,6], 5
  输出: 2

  示例 2:
  输入: [1,3,5,6], 2
  输出: 1

  示例 3:
  输入: [1,3,5,6], 7
  输出: 4
 */

 /** 采用二分查找方式 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // const matchIndex = nums && nums.findIndex(item => item === target);
  // if (matchIndex > -1) {
  //     return matchIndex
  // } else {
  //     let position = 0;
  //     for (let i = 0, l = nums.length; i < l; i++) {
  //         if (nums[i] < target) {
  //             position = i + 1;
  //         }
  //     }
  //     return position
  // }
   var i=0, j=nums.length-1;
   while (i<j) {
      var middle = Math.floor((i+j)/2);
      if (nums[middle] == target)
          return middle;
      if (nums[middle] < target)
          i = middle + 1;
      else
          j = middle - 1;
  }
  if (target > nums[i]) return i+1;
  return i;
};