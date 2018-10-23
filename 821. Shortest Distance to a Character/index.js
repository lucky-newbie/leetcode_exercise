/**
 * leetcode 821. Shortest Distance to a Character
 * 地址：https://leetcode.com/problems/shortest-distance-to-a-character/description/
 * 介绍：
 * Given a string S and a character C, return an array of integers representing the
 * shortest distance from the character C in the string.
 * 
 * example:
 * Input: S = "loveleetcode", C = 'e'
 * Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 */

 /**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let result = new Array(S.length);
  result.fill(Number.MAX_VALUE); // 将result填充
  const equalCArray = []; // 存放当前字符串中C的位置
  for (let i =0; i< S.length; i++) {
      if (S[i] === C) {
          equalCArray.push(i);
      }
  }
  for(let j =0 ;j<S.length;j++){
      if(S[j]!=C){ // 如果不为C,则找出最小距离C的数值；
          for(let k=0;k<equalCArray.length;k++){
              result[j] = Math.min(result[j],Math.abs(equalCArray[k]-j));
          }
      }
      else{
          result[j] = 0;
      }
  }
  return result
};