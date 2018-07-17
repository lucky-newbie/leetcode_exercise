/**
 * leetcode 82. Remove Duplicates from Sorted List II （与203类似）
 * 地址：https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 * 介绍：
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Example 1:
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * Example 2:
 * Input: 1->1->1->2->3
 * Output: 2->3
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
 * 先将链表中所有数据存到map中，然后遍历链表，查看当前节点值是否大于1，如果大于1，则认为是重复元素，
 * 则将当前节点的next 指向当前节点的下个节点的next
 */

var deleteDuplicates = function(head) {
  const map = new Map();
  const tempNode = new ListNode(0);
  tempNode.next = head;
  let current = tempNode;
  while (current.next !== null) {
      if (map.get(current.next.val)) {
          map.set(current.next.val, (map.get(current.next.val) + 1))
      } else {
          map.set(current.next.val, 1)
      }
      current = current.next;
  }
  let result = tempNode;
  while (result.next !== null) {
      if (map.get(result.next.val) > 1) {
          const tt = result.next;
          result.next = tt.next;
      } else {
          result = result.next;
      }
  }
  return tempNode.next;
};