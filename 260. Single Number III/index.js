/**
 * 260. Single Number III
 * https://leetcode.com/problems/single-number-iii/description/
 * 
 * 介绍：
 * Given an array of numbers nums, in which exactly two elements appear only once and
 * all the other elements appear exactly twice. Find the two elements that appear only once.
 * 
 * example:
 * Input:  [1,2,1,3,2,5]
 * Output: [3,5]
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 * 输出顺序无关
 */
// 解法一：
var singleNumber = function(nums) {
  const map = new Map();
    nums.forEach(item => {
        if (map.get(item) !== undefined) {
            map.delete(item)
        } else {
            map.set(item, item)
        }
    });
    return [...map.values()]
};

// 解法二：
var singleNumber = function(nums) {
  const map = new Map(); // 通过map记录数组中各元素出现次数
  for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) {
          map.set(nums[i], map.get(nums[i]) + 1);
      } else {
          map.set(nums[i], 1);
      }
  }
  // 使用map.forEach方法， m（（value， key，mapObj）=> {})
  const result = [];
  map.forEach((value, key) => {
      if (value === 1) {
          result.push(key)
      }
  });
  return result;
};
