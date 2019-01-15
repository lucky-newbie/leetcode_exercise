/**
 * 66. Plus One
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头。

  示例 1:
  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123。

  示例 2:
  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。
 */

var plusOne = function(digits) {
  if (digits.length === 0) {
  return [1]
}
  const res = digits.reverse();
  let temp = 0;
  const data = [];
  const fisrt = res[0] + 1;
  if (fisrt >=10) { // 考虑当前位置+1后是否满足进十操作
    data.push(fisrt - 10);
    temp = 1
  } else {
    data.push(fisrt)
  }
  for (let  i = 1; i < res.length; i++) {
    const t = res[i] + temp;
      if (t >=10) {
          data.push(t - 10);
          temp = 1
      } else {
          data.push(res[i] + temp);
          temp = 0
      }
  }
  if (temp === 1) { // 判断最后一次累加数据，是否满足进十，如果满足，则在数组中push 1
    data.push(1)
  }
  return data.reverse()
};