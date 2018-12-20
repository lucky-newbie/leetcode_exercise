/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/description/
 * 介绍：
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例:
  输入: [1,2,3]
  输出:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 采用回溯法解决排列问题
 */
  let obj = {}; // 表示是否使用过数组中的元素
  var permute = function(nums) {
    if (nums.length === 0) {
      return []
    }
    const result = [];
    generateCombination(nums, 0, [], result)
    return result;
  };

/**
* nums 所有值；
 index： 排列中第几个值
 p：存放一组排列信息；
 result：存放所有的排列数据
*/
  function generateCombination (nums, index, p, result) {
    if (nums.length === index) { // 排列中的个数与数组长度一致，则出现一组排列
      result.push(p.slice()); //复制一个新的数组
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!obj[i]) {
        obj[i] = true; // 将i位置元素标记为使用过
        p.push(nums[i]);
        generateCombination(nums, index + 1, p, result);
        p.pop(); // 由于Array.pop()会改变原数组，所以在找到满足要求的排列的时候，重新复制一个
        obj[i] = false; // 回退回来的时候，需要将i位置元素标记为没有使用过
      }
    }
    return
  }