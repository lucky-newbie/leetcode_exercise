/**
 * 917. 仅仅反转字母
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * 示例 1：

输入："ab-cd"
输出："dc-ba"
示例 2：

输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
示例 3：

输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
 */

var reverseOnlyLetters = function(S) {
  let result = S.split('');
  let i = 0;
  let j = result.length - 1;
  
  function isLetter(char) {
    return (65 <= char.charCodeAt(0) && char.charCodeAt(0) <= 90 || 97 <= char.charCodeAt(0) && char.charCodeAt(0) <= 122);
  }
  
  while (i < j) {
    if (!isLetter(result[i])) {
      i++;
    }
    if (!isLetter(result[j])) {
      j--;
    }
    if (isLetter(result[i]) && isLetter(result[j])) {
      [result[i], result[j]] = [result[j], result[i]];
      i++;
      j--;
    }
  }
  return result.join('');
};