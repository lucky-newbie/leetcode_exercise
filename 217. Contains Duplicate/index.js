/**
 * leetcode 217. Contains Duplicate， 与219问题类似
 * 地址：https://leetcode.com/problems/contains-duplicate/description/
 * 介绍：
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * 
 * Example 1:
 * Input: [1,2,3,1]
 * Output: true
 */

var containsDuplicate = function(nums) {
    const s = new Set();
    for (let i = 0, l = nums.length; i < l; i++) {
        if (s.has(nums[i])) {
            return true;
        } else {
            s.add(nums[i]);
        }
    }
    return false;
};