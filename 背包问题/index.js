/**
 * 0-1背包问题：
 * 有一个背包，它的容量为C（Capacity），现在有n种不同的物品，编号为0.。。n-1，
 * 其中每一件物品的重量为w（i），价值为v（i）。问可以向这个背包中盛放哪些物品，使得在不超过背包容量的基础上，
 * 物品的总价值最大
 */

/** 约束条件：
 * 1.考虑从n个物品中拿取；
 * 2.总容量不能超过C
 */

 /**
  * 解题思路：
    a.直接拿F（i-1，c）， 拿取i-1位置物品，价值为C
    b.拿取第i个物品，与F（i-1，c-w（i））累加，既在i-1位置前拿一个物品与i位置物品累加；
    c.求取最大值： F（i-1，c）与 (v（i) + F（i-1， c-w（i）)
  */

 /** 记忆搜索法： 开始*/
  let memo = [];
  // w: 重量数组， v：价值数组，C：容量
  function knapsack01(w, v, c) {
    memo = createMemoArray(n, c+1)
  }
  /**
   * 
   * @param {*} w  重量数组
   * @param {*} v  价值数组
   * @param {*} index 物品位置
   * @param {*} c 背包当前容量
   */
  function bestValue(w, v, index, c) {
    if (index < 0 || c <= 0) { // 物品位置小于0， 或背包容量c小于零
      return 0;
    }
    if (memo[index][c] !== -1) {
      return memo[index][c];
    }
    let res = bestValue(w, v, index - 1, c);
    if (c > w[index]) {
      res = Math.max(res, v[index] + bestValue(w, v, index -1, c - w[index]))
    }
    memo[index][c] = res;
    return res;
  }
/**
 * 构造index位置的容积值
 * @param {*} n 
 * @param {*} c 
 */
  function createMemoArray (n, c) {
    const array = [];
    for (let i = 0; i<n; i++) {
      const value = [];
      for (let j = 0; j < c; j++) {
        value.push(-1)
      }
      array.push(value)
    }
    return array;
  }
/** 记忆搜索法结束 */


 /** 动态规划法 开始*/

  /** 动态规划法 结束*/