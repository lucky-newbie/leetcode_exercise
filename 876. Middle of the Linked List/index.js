/**
 * leetcode 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 * 
 * 介绍：
 * Given a non-empty, singly linked list with head node head, return a middle
 * node of linked list.
 * If there are two middle nodes, return the second middle node.
 * 
 * example1
 * Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

 * example2
 * Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
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
var middleNode = function(head) {
  if (head === null) {
      return null;
  }
  const dumyHead = new ListNode(''); // 创建虚拟头节点
  dumyHead.next = head;
  let currenNode = dumyHead;
  const array = []; // 存放链表所有节点
  while(currenNode.next !== null) {
      array.push(currenNode.next);
      currenNode = currenNode.next
  }
  const result = array[Math.ceil((array.length - 1) / 2)]; // 去中间节点数据，如果存在两个，取后一个，所以向上取整
  return result;
};