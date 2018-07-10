/**
 * leetcode 206 Reverse Linked List，与92类似
 * 地址：https://leetcode.com/problems/reverse-linked-list/description/
 * 介绍：
 * Reverse a singly linked list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 * 定义三个变量，存放当前节点，当前节点前一节点， 当前节点后一节点， 移动三个节点位置；
 */
var reverseList = function(head) {
    let current = head;
    let previous = null;
    while(current !== null) {
        let next = current.next; // 将未反转的当前节点下个节点，赋值给next；
        current.next = previous; // 需要将当前节点的next 指向前一个节点previous
        previous = current; // 将未反转的前一个节点赋值给当前节点，让节点依次后移
        current = next; // 将未反转的下一节点赋值给当前节点，依次后移
    }
    return previous;
};