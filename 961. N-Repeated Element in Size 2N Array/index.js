/**
 * 961. N-Repeated Element in Size 2N Array
 * 在一个2N大小的数组a中，有N+1个唯一的元素，这些元素中的一个元素被重复N次。
 * 返回元素重复N次。
 */
// var repeatedNTimes = function(A) {
//     if (A.length === 0) {
//         return -1;
//     }
//     const map = new Map();
//     for (let i = 0; i < A.length; i++) {
//         if (map.get(A[i])) {
//             return A[i];
//         } else {
//             map.set(A[i], 1)
//         }
//     }
//     return -1
// };
var repeatedNTimes = function(A) {
  if (A.length === 0) {
      return -1;
  }
  const obj = {}
  for (let i = 0; i < A.length; i++) {
      if (obj[A[i]]) {
          return A[i];
      } else {
          obj[A[i]] = true
      }
  }
  return -1
};