/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets/
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  说明：解集不能包含重复的子集。
  示例:
  输入: nums = [1,2,3]
  输出:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]
 */
var subsets = function(nums) {
  const res = [];
  getRes([], 0, nums, res);
  console.log(res);
  return res;
}
function getRes(sub, index, nums, res) {
  res.push(sub);
  for (let i = index; i < nums.length; i++) {
    getRes(sub.concat(nums[i]), i + 1, nums, res);
  }
  return
}
