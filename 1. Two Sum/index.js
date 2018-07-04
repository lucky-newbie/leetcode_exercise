/**
 * 1. Two Sum（与167类似）
 * 地址：https://leetcode.com/problems/two-sum/description/
 * 介绍：
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */



/**
 * 由于两项相加的和为target，
 * 将数组中各项放到一个对象中，属性及value都是各项值，形成键值对
 * 如果对象[target-num[i]] 能找到，则target-num[i]的值与i的值，就是满足条件的两项
 */
var twoSum = function(nums, target) {
    const obj = {};
    const a = [];
    for (let i =0; i < nums.length; i++) {
        if ((target - nums[i]) in obj) {
            a.push(i);
            a.push(obj[target - nums[i]])
        } else {
            obj[nums[i]] = i;
        }
    }
    return a;
};