/**
 * leetcode 454 4Sum II
 * 地址：https://leetcode.com/problems/4sum-ii/description/
 * 题目说明：
 * Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l)
 * there are such that A[i] + B[j] + C[k] + D[l] is zero.
 * To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500.
 * All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be
 * at most 231 - 1.
 * 
 */


/**
* 思路：
* 将AB数组进行O^2级别遍历，将AB各项累加后的数据进行存储，并记录累加相同结果出现的次数
* 将CD数组也进行遍历，查看CD各项累加和是否与在AB累加和相加为0， 记录对应次数
*/

var fourSumCount = function(A, B, C, D) {
    const m1 = new Map();
    for (let i = 0, l = A.length; i < l; i++) {
        for (let j = 0, k = B.length; j < k; j++) {
            const sum = A[i] + B[j];
            if (m1.get(sum)) {
                m1.set(sum, m1.get(sum) + 1)
            } else {
                m1.set(sum, 1)
            }
        }
    }
    let time = 0;
    for (let i = 0, l = C.length; i < l; i++) {
        for (let j = 0, k = D.length; j < k; j++) {
            const sum = C[i] + D[j];
            if (m1.get(0 - sum) > 0) {
                time = time + m1.get(0 - sum);
            }
        }
    }
    return time;
};