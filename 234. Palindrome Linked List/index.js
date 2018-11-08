/**
 * 234. Palindrome Linked List
 * 地址：https://leetcode.com/problems/palindrome-linked-list/description/
 * 介绍：
 * 请判断一个链表是否为回文链表。
 * 示例 1:
    输入: 1->2
    输出: false

   示例 2:
    输入: 1->2->2->1
    输出: true
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  /**方式一开始 */
  if (!head) { // 无数据的时候认为true
    return true;
  }
  const dumyHead = new ListNode();
  dumyHead.next = head;
  const array = [];
  let curret = dumyHead.next;
  while(curret !== null) {
    array.push(curret.val);
    curret = curret.next;
  }
  if (array.length === 1) { // 只有一个数据的时候，为true
    return true
  }
  let lastIndex = array.length - 1;
  let result = false;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    if (array[i] === array[lastIndex]) {
      lastIndex = lastIndex - 1;
      result = true;
    } else {
      result = false;
      return result;
    }
  }
  return result
  /**方式一结束 */

  /** 方式二开始 */
  /** 方式二结束 */
};