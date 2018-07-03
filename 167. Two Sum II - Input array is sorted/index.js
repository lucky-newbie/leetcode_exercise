/**
 * leetcode 167. Two Sum II - Input array is sorted
 * Given an array of integers that is already sorted in ascending order, find two numbers
 * such that they add up to a specific target number.
   The function twoSum should return indices of the two numbers such that they add up to
   the target, where index1 must be less than index2.

    Note:
    Your returned answers (both index1 and index2) are not zero-based.
    You may assume that each input would have exactly one solution and you may not use
    the same element twice.

    Example:
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */

 /**
  * 由于数组是有序的，所以采用对撞指针方式实现，
  * 指定前后两个指针，比对两个指针指向的数据是否满足target，如果不满足则将前后指针进行移动
  * 返回的数据从1开始，所以最终指针指向位置都需要 + 1；
  */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        if ((numbers[left] + numbers[right]) === target) {
            return [left+1, right + 1];
        } else if ((numbers[left] + numbers[right]) < target) {
            left++;
        } else {
            right--;
        }
    }
};