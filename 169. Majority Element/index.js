/**
 * 169. Majority Element
 * 地址：
 * https://leetcode.com/problems/majority-element/description/
 * 介绍：
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
  你可以假设数组是非空的，并且给定的数组总是存在众数。

    示例 1:
    输入: [3,2,3]
    输出: 3

    示例 2:
    输入: [2,2,1,1,1,2,2]
    输出: 2
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
// 已知题目已说数组不为空， 并且一定有返回值，所以可以省去边界情况
var majorityElement = function(nums) {
  const map = new Map();
  nums && nums.forEach(item => {
      if (map.get(item) !== undefined) {
          map.set(item, map.get(item) + 1)
      } else {
          map.set(item, 1)
      }
  });
  const values = [...map.values()];
  const maxValues = Math.max(...values); // 找到当前出现次数最多数据
  let result = 0
  for (let [key, value] of map.entries()) {
      if (value === maxValues) {
          result = key
          }
  }
  return result
};