/**
 * leetcode 219. Contains Duplicate II(与217类似)
 * 地址：https://leetcode.com/problems/contains-duplicate-ii/description/
 * 介绍:
 * Given an array of integers and an integer k, find out whether there are two distinct
 * indices i and j in the array such that nums[i] = nums[j] and the absolute difference
 * between i and j is at most k.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 */

 /**
* 使用滑动窗口 + 查找表解决；
* i- j之前的数据长度为 k + 1， 即为set的长度为k + 1， 判断在k + 1 长度的set中，能否查找到nums[i]相同的元素，如果有则满足i + j之间存在num[i] == *nums[j];
* 
*/
var containsNearbyDuplicate = function(nums, k) {
    
    const s = new Set();
    for (let i = 0, l = nums.length; i < l; i++) {
        if (s.has(nums[i])) {
            return true;
        } else {
            s.add(nums[i])
        }
        if (s.size === k + 1) {
            s.delete(nums[i - k])
        }
    }
    
    return false;
    
};