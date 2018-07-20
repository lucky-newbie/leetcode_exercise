/**
 * leetcode 20. Valid Parentheses
 * 地址：https://leetcode.com/problems/valid-parentheses/description/
 * 介绍：
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
 */


 /**
 * @param {string} s
 * @return {boolean}
 * 使用栈数据结构 处理该问题， 此方式待优化
 */
var isValid = function(s) {
  if (!s) {
      return true;
  }
  const stackArray = [];  // 使用数组模拟栈数据结构， pop方法出栈， push进栈
  let pushFlag = false;
  for (let i = 0, l = s.length; i < l; i++) {
       if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
          stackArray.push(s.charAt(i));
           pushFlag = true;
      } else {
          const last = stackArray[stackArray.length - 1] ;
          if (s.charAt(i) === ')' && last === '(') {
              stackArray.pop();
          } else if (s.charAt(i) === '}' && last === '{') {
             stackArray.pop();
          } else if (s.charAt(i) === ']' && last === '[') {
             stackArray.pop();
          } else {
              stackArray.push(s.charAt(i))
          }
          
      }
  }
  if (stackArray.length === 0 && pushFlag) {
      return true;
  }
  return false;
 
};