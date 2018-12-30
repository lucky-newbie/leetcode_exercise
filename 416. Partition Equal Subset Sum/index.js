/**
 * 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
  注意:

  每个数组中的元素不会超过 100
  数组的大小不会超过 200
  示例 1:
  输入: [1, 5, 11, 5]
  输出: true
  解释: 数组可以分割成 [1, 5, 5] 和 [11].

  示例 2:
  输入: [1, 2, 3, 5]
  输出: false
  解释: 数组不能分割成两个元素和相等的子集.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 记忆化搜索
let memo = [];
var canPartition = function(nums) {
    if (nums.length === 0) {
        return false;
    }
    let sum = 0;
    nums.forEach(item => sum += item); // 计算数组中各元素总和
    if (sum % 2 !== 0) { // 如果数组总和不能正好分为2份，则无法创建总和相同的两个数组
        return false;
    }
    memo = createMemo(nums.length, sum / 2 + 1);
    return trySum(nums, nums.length - 1, sum / 2)
};

function createMemo(n, t) {
    const array = [];
    for (let i = 0; i< n; i++) {
        const temp = []
        for (let j = 0; j < t; j++) {
            temp.push(-1)
        }
        array.push(temp)
    }
    return array
}

function trySum(nums, index, sum) {
    if (sum === 0) {
          return true                              
    }
    if (index <0 || sum < 0) {
        return false
    }
    if (memo[index][sum] != -1) {
        if (memo[index][sum] == 0) {
            return false
        } else {
            return true
        }
    }
    memo[index][sum] = (trySum(nums, index - 1, sum) || trySum(nums, index - 1, sum - nums[index])) ? 1 : 0
    
    return memo[index][sum] == 1;
}