/**
 * 21. Merge Two Sorted Lists
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
  示例：

  输入：1->2->4, 1->3->4
  输出：1->1->2->3->4->4
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
/** 方式一 */
// var mergeTwoLists = function(l1, l2) {
//   const dummyHead1 = new ListNode();
//   const dummyHead2 = new ListNode();
//   dummyHead1.next = l1;
//   dummyHead2.next = l2;
//   let head1 = dummyHead1;
//   let head2 = dummyHead2;
//   const array = []
//   while(head1.next || head2.next) {
//       if (head1.next) {
//           array.push(head1.next.val)
//           head1 = head1.next
//       }
//       if (head2.next) {
//           array.push(head2.next.val)
//           head2 = head2.next
//       }
//   }
//   const sortArray = array.sort((a,b) => a- b);
//   const head = new ListNode();
//   let current = head;
//   for (let i = 0; i < sortArray.length; i++) {
//       const node = new ListNode(sortArray[i]);
//       current.next = node;
//       current = node;
//   }
//   return head.next
// };
/**方式一结束 */

/**方式二 */
var mergeTwoLists = function(l1, l2) {
  var dummyHead = new ListNode;
  var tail = dummyHead;
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          tail.next = l1;
          l1 = l1.next;
      } else {
          tail.next = l2;
          l2 = l2.next;
      }
      tail = tail.next
  }
  
  tail.next = l1 || l2;
  return dummyHead.next
};

/** 方式二结束 */