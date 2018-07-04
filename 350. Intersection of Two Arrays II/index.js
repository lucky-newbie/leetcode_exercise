/**
 * 350. Intersection of Two Arrays II(与349号问题类似)
 * 地址：https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 * 介绍：Given two arrays, write a function to compute their intersection.
   Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

   Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
    Follow up:
    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

var intersect = function(nums1, nums2) {
    const map = new Map();
    for (let i =0, l = nums1.length; i < l; i++) {
        if (map.get(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        } else {
            map.set(nums1[i], 1)
        }
    }
    
    const array = [];
    for (let i = 0, l = nums2.length; i < l; i++) {
        if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
            array.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1)            
        }
    }
    return array;
};