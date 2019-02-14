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
/* 通过快慢指针来判断是否为环形链表 */
var hasCycle = function(head) {
  if (!head || !head.next) {
      return false;
  }
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
          return true;
      }
  }
  return false;
};