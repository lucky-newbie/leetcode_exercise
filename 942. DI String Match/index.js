/**
 * 942. DI String Match
 * 地址：https://leetcode.com/problems/di-string-match/
 * 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。
  返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：
  如果 S[i] == "I"，那么 A[i] < A[i+1]
  如果 S[i] == "D"，那么 A[i] > A[i+1]

  示例 1：
  输出："IDID"
  输出：[0,4,1,3,2]

  示例 2：
  输出："III"
  输出：[0,1,2,3]

  示例 3：
  输出："DDI"
  输出：[3,2,0,1]
  
  提示：
  1 <= S.length <= 1000
  S 只包含字符 "I" 或 "D"。
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    if (!S) {
      return [0]
    }
    const strArray = S.split('');
    let i = 0;
    let d = strArray.length;
    const res = [];
    for (let t = 0; t < strArray.length; t++) {
      if (strArray[t] === 'I') {
        res.push(i);
        i++
      } else if (strArray[t] === 'D') {
        res.push(d);
        d--;
      }
    }
    if (strArray[strArray.length - 1] === 'I') {
      res.push(i);
    } else {
      res.push(d)
    }
    return res;
};