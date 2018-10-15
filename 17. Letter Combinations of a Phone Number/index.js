/**
 * 17 Letter Combinations of a Phone Number
 * 介绍：
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 例子：
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

 /**
 * @param {string} digits
 * @return {string[]}
 * 给出一个数字字符串，返回这个数字字符串能表示的所有字母组合
 */
/**
* 问题需注意地方：
*   1.字符串合法性，什么样的字符串是合法的？
*   2.空字符怎么算？
*   3.多个解的时候，顺序怎么算？
*/

const nums_to_str = {
  '0': '',
  '1': '',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

var letterCombinations = function(digits) {
  
  const res = [];
  if (!digits) {
      return res;
  }
  
  getStr(digits, 0, '', res)
  return res;
};

function getStr (digits, position, s, res) {
   if (position === digits.length) {
      res.push(s);
      return
  }
  const current = digits.charAt(position);
  const strs = nums_to_str[current]; // 得到当前数字对应字符串;
  for (let i = 0, l = strs.length; i < l; i++) {
      getStr(digits, position + 1, s + strs.charAt(i), res)
  }
  return
}
