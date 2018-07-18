/**
 * leetcode 24. Swap Nodes in Pairs(与25类似)
 * 地址：https://leetcode.com/problems/swap-nodes-in-pairs/description/
 * 介绍：
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3
 * 
 * Note:
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
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
 * 通过定义四个变量，分别为previous： 指向前一个节点， node1/node2两个替换节点， next： node2节点的下一个节点
 */
var swapPairs = function(head) {
  const dumyHead = new ListNode(0);
  dumyHead.next = head;
  let previous = dumyHead;
  while(previous.next !== null && previous.next.next !== null) {
      const node1 = previous.next;
      const node2 = node1.next;
      const next = node2.next;
      // 交换node1/node2节点
      node2.next = node1; 
      node1.next = next;
      previous.next = node2;
      
      // 将previous节点指向node1
      previous = node1;
  }
  // 返回dumyHead中的next节点，即为链表的头节点
  return dumyHead.next; 
};