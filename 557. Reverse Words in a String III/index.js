/**
 * leetcode 557. Reverse Words in a String III
 * 地址：https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 * 介绍：
 * 
 * Given a string, you need to reverse the order of characters in each word within
 * a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */

 /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (!s) {
      return s;
  }
  const strArray = s.split(' ');
  let result = '';
  strArray.map((item, index) => {
      result = result + [...item].reverse().join('');
      if (index !== strArray.length -1) {
          result = result + ' ';
      }
  })
  return result;
};