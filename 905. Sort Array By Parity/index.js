/**
 * leetcode 905. Sort Array By Parity
 * 地址：https://leetcode.com/problems/sort-array-by-parity/description/
 * 
 * 介绍：
 * Given an array A of non-negative integers, return an array consisting of all 
 * the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 
 * 例子：
 * Input: [3,1,2,4] 
 * Output: [2,4,3,1] 
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */

 /**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const result = [];
  if (!A) {
      return [];
  }
  
  for (let i = 0, l = A.length; i < l; i++) {
      if (A[i] % 2 === 0) {
          result.unshift(A[i])
      } else {
        result.push(A[i])
      }
  }
  return result
};