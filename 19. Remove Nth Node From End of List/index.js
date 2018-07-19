/**
 * leetcode 19. Remove Nth Node From End of List
 * 地址：https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 * 介绍：
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * 
 * Note:
 * Given n will always be valid.
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
 * @param {number} n
 * @return {ListNode}
 * 方式1: 可先遍历链表，然后得到链表整体长度，然后在遍历一次链表，链表长度 - n，则为正数第几个节点为删除节点。
 * 方式2: 定义两个指针，两个指针距离n个距离，两个节点一起从头向尾部移动，当后一个节点为为空时，则第一个节点为删除节点
 */
var removeNthFromEnd = function(head, n) {
  // 判断n是否合法（不是整数/负数/大于链表长度）
  if (!n) {
      return null;
  }
  // 由于n为从链表尾部开始计算， 则定义两个节点，一个节点指向链表尾部， 一个节点指向 尾部节点 + n的前节点
  let dumyHead = new ListNode(0);
  dumyHead.next = head;
  let first = dumyHead;
  let last = dumyHead;
  for (let i = 0; i < n + 1; i++) { // 按照题目，n从1开始计算，由于第一个节点指向虚拟节点，则遍历n + 1次
      if (last !== null) {
          last = last.next;
      }
  }
  
  while(last !== null) { // 当last为null时，此时first节点即为删除节点
      first = first.next;
      last = last.next;
  }
  // 将first.next节点的指向及数据赋给first节点，使链表整体相当于删除了first节点
  const deleteNode = first.next;
  first.next = deleteNode.next;
  
  return dumyHead.next;
};