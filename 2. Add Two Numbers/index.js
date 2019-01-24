/**
 * 2. Add Two Numbers
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
  如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
  您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  示例：
  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let temp = 0;
   let v1 = 0; 
   let v2 = 0;
   const dummyHead = new ListNode();
   let current = dummyHead;
   while (l1 || l2) {
       if (l1) {
           v1 = l1.val
       } else {
         v1 = 0
       }
       if (l2) {
           v2 = l2.val;
       } else {
           v2 = 0
       }
       let value = v1 + v2 + temp;
       if (value >= 10) {
           value = value - 10;
           temp = 1
       } else {
           temp = 0
       }
       const node = new ListNode(value);
       current.next = node;
       current = current.next
       if (l1) {
           l1 = l1.next
       }
       if (l2) {
           l2 = l2.next
       }
       if (!l1 && !l2 && temp == 1) { // 需考虑只有一个节点时，累加正好进一情况
         l1 = new ListNode(1);
         temp = 0;
       }
   }
   return dummyHead.next;
};