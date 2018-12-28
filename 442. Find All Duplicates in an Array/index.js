/**
 * 442. Find All Duplicates in an Array
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而
 * 其他元素出现一次。找到所有出现两次的元素。
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3]
 */


 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  if (nums.length === 0) {
      return []
  }
  const map = new Map();
  const res=[]
  for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) {
          map.delete(nums[i])
          res.push(nums[i])
      } else {
          map.set(nums[i], 1)
      }
  }
  return res;    
};