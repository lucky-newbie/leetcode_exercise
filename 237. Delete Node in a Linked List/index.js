/**
 * leetcode 237. Delete Node in a Linked List
 * 地址：https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 * 介绍：
 * rite a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node.
 * Given linked list -- head = [4,5,1,9], which looks like following:
 * 4 -> 5 -> 1 -> 9
 * 
 * Example 1:
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 * Explanation: You are given the second node with value 5, the linked list
 *  should become 4 -> 1 -> 9 after calling your function.
 * 
 * Example 2:
 * Input: head = [4,5,1,9], node = 1
 * Output: [4,5,9]
 * Explanation: You are given the third node with value 1, the linked list
   should become 4 -> 5 -> 9 after calling your function.
 */
/**
 * Note:
The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
 */
 

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 将删除节点下一个节点A拿到，然后将删除节点的next指向A节点的next， 删除节点的值改为A节点的值，则整个链表中按照指针指向类似删除了指定节点
 */
var deleteNode = function(node) {
  
  if (node === null) { // 提示给定链表至少两个元素，此处也可省略
      return null
  }
  if (node.next === null) { // 提示给定节点不为尾节点，此处可省略
      node = null
  }
  const nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
};