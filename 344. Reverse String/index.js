/**
 * leetcode 344. Reverse String;
 * 地址：https://leetcode.com/problems/reverse-string/description/
 * 介绍：
 * Write a function that takes a string as input and returns the string reversed.
 * Example:
 * 
 * Given s = "hello", return "olleh".
 */

 /**
 * @param {string} s
 * @return {string}
 * 使用队列先进后出数据结构实现，通过数组模拟实现
 */
var reverseString = function(s) {
  if (s === null || s ==='') {
      return s;
  }
  const array = [];
  for (let i = 0, l = s.length; i < l; i++) {
      array.push(s.charAt(i));
  }
  let result = '';
  for (let j = 0, l = array.length; j < l; j++) {
      result = result + array.pop();
  }
  return result;
};