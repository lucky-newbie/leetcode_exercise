/** 递归方式解决 */
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
 */
var removeElements = function(head, val) {
    if (!head) {
        return null
    }
    const res = removeElements(head.next, val);
    if (head.val === val) {
        return res
    } else {
        head.next = res;
        return head
    }
}