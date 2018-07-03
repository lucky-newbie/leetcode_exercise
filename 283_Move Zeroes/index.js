/**
 * leetcode 283. Move Zeroes
 * 地址：https://leetcode.com/problems/move-zeroes/description/
 * 题目介绍：
 * Given an array nums, write a function to move all 0's to the end of
 * it while maintaining the relative order of the non-zero elements.
 */

 /**
  * 将数组中非零元素按照顺序都移动到前面，记录数据为零的个数A，非零数据移动完毕之后，直接向数组补充A个零
  */
var moveZeroes = function(nums) {
    let i = 0;
    for (let k =0; k< nums.length; k++) {
        if (nums[k] !== 0) {
            nums[i] = nums[k];
            i++;
        }
    }
    for (let j = i; j< nums.length; j++) {
        nums[j] = 0;
    }
    // return nums;
};