/**
 * leetcode 3. Longest Substring Without Repeating Characters
 * 地址：https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 介绍：
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


var lengthOfLongestSubstring = function(s) {
    
    //     /* 通过滑动窗口解决该问题 */
    //     // 创建一个对象，属性为存放不重复的字符    
        const totalArray = {};
        
        let left = 0; // 左边界
        let right = -1; // 右边界
        let result = 0; // 不重复字符串个数
        
        while(left < s.length) {
        
            // 判断对象中right + 1位置是否有数据，并且（right + 1） < s.length，则对象[right + 1] 赋值， right向后移动一个位置
            if (totalArray[s.charAt(right + 1)] === undefined && (right + 1) < s.length) {
                totalArray[s.charAt(right + 1)] = 1;
                right ++;
            } else {
                // 出现重复元素，则对象删除重复值，left 向后移动一个位置
                totalArray[s.charAt(left)] = undefined;
                left ++;
            }
            
            
            result = Math.max(result, (right - left + 1));
        }
        return result;
    }