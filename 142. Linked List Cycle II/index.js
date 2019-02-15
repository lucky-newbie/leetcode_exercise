/**
 * 142. Linked List Cycle II
 * 地址：
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * 介绍：
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
  如果 pos 是 -1，则在该链表中没有环。
  说明：不允许修改给定的链表。

  示例 1：
  输入：head = [3,2,0,-4], pos = 1
  输出：tail connects to node index 1
  解释：链表中有一个环，其尾部连接到第二个节点。

  示例 2：
  输入：head = [1,2], pos = 0
  输出：tail connects to node index 0
  解释：链表中有一个环，其尾部连接到第一个节点。

  示例 3：
  输入：head = [1], pos = -1
  输出：no cycle
  解释：链表中没有环。
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // if (!head || !head.next) {
  //     return null
  // }
  // let fast = head;
  // let slow = head;
  // while (fast.next && fast.next.next) {
  //     fast = fast.next.next;
  //     slow = slow.next;
  //     if (fast === slow) { // 第一次重合，则认为有环
  //         while (head != slow) {
  //             head = head.next;
  //             slow = slow.next;
  //         }
  //         return slow;
  //     }
  // }
  // return null
  if (!head || !head.next) {
    return null;
  }
  let fast = head;
  let slow = head;
  let pos = head;
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
          // 头结点至环开始的距离与快慢指针相遇点至环开始的距离是一致的；
          // 当快慢指针相遇后，头结点与慢指针继续向前移到，头结点指针与慢指针会在环开始位置相遇
          while (slow != pos) {
              slow = slow.next;
              pos = pos.next;
          }
          return pos;
      }
  }
  return null;
};