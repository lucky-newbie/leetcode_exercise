/**
 * leetcode 136. Single Number
 * 地址：https://leetcode.com/problems/single-number/description/
 * 介绍：
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const m = new Map();
  for (let i = 0, l = nums.length; i< l; i++) {
      if (m.get(nums[i])) {
          m.delete(nums[i])
      } else {
          m.set(nums[i], 1)
      }
  }
  return [...m.keys()][0]
};