/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组。
  例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/****** 超时 */
let used = [];
var threeSum = function(nums) {
    if (nums.length === 0) {
        return []
    }
    const res = [];
    const result = [];
    getNums(nums, 0, [], res); // 要求返回的组合不能出现重复的情况，所以需要在进行去重；
    let obj = {};
    for (let i = 0; i< res.length; i++) {
        const item = res[i];
        if (isUniqe(item, obj)){
            result.push(item)
        }
    }
    return result;
};

function getNums(nums, index, array,res){
    if(index > 3) {
      return
    }
    if (index === 3 && ((array[0] + array[1] + array[2]) == 0)) {
            res.push(array.slice());
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true;
            array.push(nums[i]);
            getNums(nums, index + 1, array, res)
            array.pop();
            used[i] = false;
        }
    }
    return;
}
/** 将数组排序，转成字符串，通过对象.属性判断数组内容是否重复； */
function isUniqe(array, obj) {
    const sort = array.sort((a,b) => a-b);
    const str = sort.join('');
    if (!obj[str]) {
        obj[str] = true 
        return true;
    }
    return false
}
/****** 超时 */


var threeSum = function(nums) {
  var results = []
  if (nums.length < 3) return results
  
  nums = nums.sort((x,y) => {return x-y})
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i-1] === nums[i]) continue
    var target = -1 * nums[i]
    if (nums[i+1]*2>target || nums[nums.length-1]*2 < target) continue
    var j = i + 1
    var k = nums.length - 1
    while (j < k) {
      var candidate = nums[j] + nums[k]
      if (candidate === target) {
        results.push([nums[i], nums[j], nums[k]])
        j++
        while (j < k && nums[j-1] === nums[j]) j++
        k--
        while (k > j && nums[k] === nums[k+1]) k--
      } else if (candidate < target) {
        j++
      } else { // cadidate > target
        k--
      }
    }
  }
  return results
};