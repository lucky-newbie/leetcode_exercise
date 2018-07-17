/**
 * leetcode 203. Remove Linked List Elements
 * 地址：https://leetcode.com/problems/remove-linked-list-elements/description/
 * 介绍：
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example: 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 *
 *  设立一个虚拟头节点，将虚拟头节点的next指向head；
 *  判断current的下一个节点的值是否===val， 如果相等，则将current.next指向 current下个节点的next
 */
var removeElements = function(head, val) {
  let tempNode = new ListNode(0, head);
  tempNode.next = head;
  let current = tempNode;
  while(current.next !== null) {
      if (current.next.val === val) {
          const next = current.next;
          current.next = next.next;
      } else {
          current = current.next
      }
  }
  return tempNode.next;
};