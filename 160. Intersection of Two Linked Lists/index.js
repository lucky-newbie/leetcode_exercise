/**
 * 160. Intersection of Two Linked Lists
 * 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // let set = new Set();
  // while (headA || headB) {  
  //     if (headA) {
  //         if (set.has(headA.val)) {
  //             return headA;
  //         }
  //         set.add(headA.val);
  //         headA = headA.next;
  //     }
  //     if (headB) {
  //         if (set.has(headB.val)) {
  //             return headB;
  //          }
  //         set.add(headB.val);
  //         headB = headB.next;
  //     } 
  // }
  // return null;
   let currA = headA;
   let currB = headB;
   while (currA) {
       currA.visited = true;
       currA = currA.next;
   }
   while (currB) {
       if (currB.visited) { return currB; }
       currB = currB.next;
   }
   return null;
};