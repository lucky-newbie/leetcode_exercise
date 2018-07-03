/**
 * leetcode 349. Intersection of Two Arrays
 * 题目介绍：
 * Given two arrays, write a function to compute their intersection.
 * Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
    Note:
    Each element in the result must be unique.
    The result can be in any order.
 */

 /**
  * 使用set，得到数组交集
  */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const array = [];
    for (let i = 0; i< nums2.length; i++) {
        if (set1.has(nums2[i])){
            array.push(nums2[i]);
        }
    }
    console.log('new Set(array)', new Set(array))
    return Array.from(new Set(array));
};