/**
 * 75. Sort Colors
 * 地址：https://leetcode.com/problems/sort-colors/description/
 * 介绍：给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，
 * 并按照红色、白色、蓝色顺序排列。此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

  注意:
  不能使用代码库中的排序函数来解决这道题。

  示例:
  输入: [2,0,2,1,1,0]
  输出: [0,0,1,1,2,2]
 */

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/** 三路快排方式解决
 * 1.分割三个控件，[0， zero]存放0, [zero + 1, two - 1]存放1， [two, nums.length -1]存放2
 * a.如果i元素=2， 则将two--， nums[i]与nums[two -1]交换位置
 * b.如果交换过位置的nums[i]=0，则zero++，nums[zero]与nums[i]交换位置， i++
 * c.如果nums[i]=1,则i++
 */
var sortColors = function(nums) {
  let zero = -1; // nums[0, zero]存放0；
  let two = nums.length; // nums[two, nums.length -1]存放2；
  // nums[zero+1, two -1]存放1
  for(let i = 0; i< two;){
      if (nums[i] === 1) {
          i++;
      } else if (nums[i] === 2) {
          two--;
          swap(nums, i, two)
      } else if (nums[i] === 0) {
          zero++;
          swap(nums, i, zero);
          i++;
      }
  }
  return nums;
};
function swap(arr, index1, index2){
  [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
  return arr;
}