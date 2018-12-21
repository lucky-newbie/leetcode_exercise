/**
 * 47. Permutations II
 * 地址：https://leetcode.com/problems/permutations-ii/
 * 介绍：
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 输入: [1,1,2]
    输出:
    [
      [1,1,2],
      [1,2,1],
      [2,1,1]
    ]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  let visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  
  function dfs(nums, current, visited) {
      if(current.length == nums.length) {
          result.push(current);
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (visited[i] || i > 0 && nums[i] == nums[i-1] && !visited[i-1]){
              continue;
          }
              visited[i] = true; 
              dfs(nums, current.concat(nums[i]), visited);
              visited[i] = false;
      }
  }
  
  dfs(nums, [], visited);
  return result;
};