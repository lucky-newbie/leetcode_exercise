/**
 * 448. Find All Numbers Disappeared in an Array
 * 地址：https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * 介绍：
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
  找到所有在 [1, n] 范围之间没有出现在数组中的数字。
  您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

  示例:
  输入:
  [4,3,2,7,8,2,3,1]
  输出:
  [5,6]
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const max = nums.length;
  const temp = []
  for (let i = 1; i <= max; i++) { // 建立全数据数组
    temp.push(i)
  }
  const set1 = new Set(nums);
  const result = temp.filter(i => !set1.has(i)) // 全数据数组与目标数据求差集，即未缺少的数据
  console.log(result)
  return result;
};