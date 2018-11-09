/**
 * 674. Longest Continuous Increasing Subsequence
 * 地址：https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/
 * 介绍：
 * 给定一个未经排序的整数数组，找到最长且连续的的递增序列
 * 示例 1:

    输入: [1,3,5,4,7]
    输出: 3
    解释: 最长连续递增序列是 [1,3,5], 长度为3。
    尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 
  示例 2:

    输入: [2,2,2,2,2]
    输出: 1
    解释: 最长连续递增序列是 [2], 长度为1。
  注意：数组长度不会超过10000。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  /** 方法1开始， beat 30% */
  // if (!nums || nums.length === 0) {
  //   return 0;
  // }
  // let value = nums[0];
  // let length = 1;
  // const array = [];
  // for (let i = 0; i<nums.length; i++) {
  //   if (nums[i + 1] && nums[i + 1] > value) {
  //     length++;
  //     value = nums[i + 1];
  //   } else if (i === nums.length - 1) {
  //     array.push(length);
  //   } else {
  //     array.push(length);
  //     value = nums[i + 1];
  //     length = 1;
  //   }
  // }
  // return Math.max(...array);
  /** 方法一结束 */

  /** 方法二， 方法二较方法一更快些 */
  if (!nums || nums.length === 0) {
    return 0;
  }

  let max = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
       count++;
       max = Math.max(max, count)
    } else {
        count = 1;
    }
  }
  console.log(max)
  return max;
  /** 方法二结束 */
};