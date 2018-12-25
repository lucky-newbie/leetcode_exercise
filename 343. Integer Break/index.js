/**
 * 343. Integer Break
 * 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
  示例 1:
  输入: 2
  输出: 1
  解释: 2 = 1 + 1, 1 × 1 = 1。

  示例 2:
  输入: 10
  输出: 36
  解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
  说明: 你可以假设 n 不小于 2 且不大于 58。
 */
/**
 * @param {number} n
 * @return {number}
 */
let memoryArray = [];
var integerBreak = function(n) {
    memoryArray=createMemoryArray(n)
    return breakInteger(n);
};
function createMemoryArray (n) {
    const array = [];
    for (let i = 0; i < n+1; i++) {
        array.push(-1)
    }
    return array;
} 

function breakInteger(n) {
    if (n === 1) {
        return 1;
    }
    if (memoryArray[n] !== -1) {
        return memoryArray[n];
    }
    let result = -1;
    for (let i = 1; i <= n -1; i++) {
        result = math3(result, i*(n-i), i*breakInteger(n-i))
    }
    memoryArray[n] = result
    return result;
}

function math3(a,b,c){
    return Math.max(a, Math.max(b,c));
}