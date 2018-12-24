/**
 * 70. Climbing Stairs
 * 地址：https://leetcode.com/problems/climbing-stairs/
 * 介绍：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  注意：给定 n 是一个正整数。

  示例 1：
  输入： 2
  输出： 2
  解释： 有两种方法可以爬到楼顶。
  1.  1 阶 + 1 阶
  2.  2 阶

  示例 2：
  输入： 3
  输出： 3
  解释： 有三种方法可以爬到楼顶。
  1.  1 阶 + 1 阶 + 1 阶
  2.  1 阶 + 2 阶
  3.  2 阶 + 1 阶
 */
let memoryArray = [] // 创建一个存放出现过的数据的数组，如果没有计算过，则对应值为-1
var climbStairs = function(n) {
    memoryArray = usedArray(n)
    return caluteWay(n)
};

function usedArray (n) {
    const array = [];
    for (let i = 0; i < n+1; i++) {
        array[i] = -1
    }
    return array;
}

function caluteWay (n) {
    if (n === 1) {
        return 1;
    }
    if (n=== 2) {
        return 2;
    }
    if (memoryArray[n] == -1) { // 采用记忆搜索法，自顶向下搜索
        memoryArray[n] = caluteWay(n-1) + caluteWay(n -2)
        }
    return memoryArray[n]
}