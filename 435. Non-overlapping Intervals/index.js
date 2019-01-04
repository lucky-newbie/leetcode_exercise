/**
 * 435. Non-overlapping Intervals
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

  注意:

  可以认为区间的终点总是大于它的起点。
  区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
  示例 1:
  输入: [ [1,2], [2,3], [3,4], [1,3] ]
  输出: 1
  解释: 移除 [1,3] 后，剩下的区间没有重叠。

  示例 2:
  输入: [ [1,2], [1,2], [1,2] ]
  输出: 2
  解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。

  示例 3:
  输入: [ [1,2], [2,3] ]
  输出: 0
  解释: 你不需要移除任何区间，因为它们已经是无重叠的了
 */

 /**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

//方式一：动态规划法解决，可以转换为数组排序后，求最长增长子序列，整个数组长度-最长增长子序列即为结果值

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
      return 0;
  }
  // 先将数组进行从小到大排序
  const sortArray = sort(intervals);
  const memo = createMemo(intervals);
  for (let i = 1; i < intervals.length; i++) { // 从i=1开始是因为，第0个的值已经通过memo【0】赋值为1，所以第0个可以不考虑
      for (let j = 0; j < i; j++) { // 查找i之前有多少个intervals[i].start >= intervals[j].end
          if (intervals[i].start >= intervals[j].end) {
              memo[i] = Math.max(memo[i], 1 + memo[j])
          }
      }
  }
  const maxLIS = Math.max(...memo);
  return intervals.length - maxLIS;
  
};

function sort(array) {
  return array.sort((a, b) => {
    if (a.start !== b.start) {
        return a.start - b.start
    }  else {
        return a.end - b.end;
    }
  })
}

function createMemo(a) {
  const memo = [];
  for(let i = 0; i < a.length; i++) {
      memo.push(1)
  }
  return memo;
}
// 方式一 动态规划结束；

//方式二：贪心算法：
// 贪心算法解决：
// 1.将区间按照结尾从大到小进行排列
// 2.如果当前区间的开始大于前一个区间的end，则认为连续空间+1
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) {
      return 0;
  }
  const sortArray = intervals.sort((a,b) => {
      if (a.end != b.end) {
          return a.end - b.end
      }
      return a.start - b.start
  })
  let res = 1; // 认为第一个结尾最大的区间是子空间，所以res初始化为1
  let pre = 0; // 表示指向前一个区间的位置
  for (let i = 1; i < sortArray.length; i++) {
      if (sortArray[i].start >= sortArray[pre].end) {
          res++;
          pre = i
      }
  }
  return intervals.length - res;
}