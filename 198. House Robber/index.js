/**
 * 198. House Robber
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋
 * 装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放
 * 金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
  示例 1:
  输入: [1,2,3,1]
  输出: 4
  解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
      偷窃到的最高金额 = 1 + 3 = 4 。

  示例 2:
  输入: [2,7,9,3,1]
  输出: 12
  解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*记忆搜索法*/
let memo = []; // 表示存放nums[i ...n]之间最大的收益
var rob = function(nums) {
    memo = createMemo(nums);
    return tryRob(nums, 0);
};

function createMemo(nums) {
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        array.push(-1);
    }
    return array;
}

// 考虑抢劫nums[index ... nums.length-1]范围内的所有房子
function tryRob(nums, index) {
    if (index >= nums.length) {
        return 0;
    }
    if (memo[index] !== -1) { // 如果！=-1，则认为之前计算过memo[index]的值，无需递归，直接使用即可
        return memo[index];
    }
    let res = 0; // 最大收益值
    for (let i = index; i < nums.length; i++) {
        res = Math.max(res, nums[i] + tryRob(nums, i + 2))
    }
    memo[index] = res;
    return res;
}