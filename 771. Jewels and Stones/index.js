/**
 * 
 * https://leetcode.com/problems/jewels-and-stones/description/
 */

 /**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  if (!S) {
      return 0
  }
  let result = 0;
  for (let i = 0, l = S.length; i < l; i++) {
      if (J.indexOf(S.charAt(i)) > -1) {
          result = result + 1;
      }
  }
  return result;
};