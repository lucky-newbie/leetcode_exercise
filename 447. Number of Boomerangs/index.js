
/**
 * leetcode 447号问题 Number of Boomerangs
 * 题目介绍：
 * Given n points in the plane that are all pairwise distinct,
 * a "boomerang" is a tuple of points (i, j, k) such that the distance
 * between i and j equals the distance between i and k (the order of the tuple matters).
 * Find the number of boomerangs. You may assume that n will be at most 500
 * and coordinates of points are all in the range [-10000, 10000] (inclusive).
 * 
 * 题目地址：https://leetcode.com/problems/number-of-boomerangs/description/
 */


/* 解题思路：
i到j的距离 = i到k的距离，所以i可以作为枢纽点，计算所有的点到枢纽点的距离，将距离与出现的次数存放到map中，如果出现的次数大于等于2，则能找到一组满足条件的数据
由于数据在-10000 - 1000之前，所以不需要考虑数据类型越界的问题
*
*/

/**
* 计算两点之间距离， 返回平方值
*/
function distance(a, b) {
    const x1 = a[0];
    const y1= a[1];
    const x2 = b[0];
    const y2 = b[1];
    const d = (x1 - x2) * (x1 - x2) + (y1-y2) * (y1-y2);
    return d;
}

/**
 * 实现类：
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    // 遍历之前距离对应次数的map集合，判断次数大于等于2的数据，即为满足条件的数据（=2的情况为，正好三个点，出现距离相等的次数为2）
    let num = 0;
    for (let i = 0, l = points.length; i < l; i++) {
        const distanceMap = new Map(); // 遍历整个数组，存放各点之间距离及出现次数
        for (let j = 0, k = points.length; j < k; j++) {
            if (i !==j) {
                const dis = distance(points[i], points[j]);
                if (distanceMap.get(dis)) {
                    distanceMap.set(dis, (distanceMap.get(dis) + 1));
                } else {
                    distanceMap.set(dis, 1)
                }
            }
        }
        for (let value of distanceMap.values()){
            if (value >= 2) {
                num = num + value * (value - 1);
            }
        }
    }
    return num;
};


