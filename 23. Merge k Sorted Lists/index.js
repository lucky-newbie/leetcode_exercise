/**
 * 23. Merge k Sorted Lists
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
  示例:
  输入:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  输出: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
      return  null;
  }
  const dataArray = [];
  lists.map(node => {
      nodeToArray(dataArray, node)
  });
  const sortArray = dataArray.sort((a,b) => {
      return a - b
  });
  const dummyHead = new ListNode();
  // head.val = sortArray[0].val;
  let current = dummyHead ;
  for (let i = 0; i < sortArray.length; i++) {
      const node = new ListNode(sortArray[i]);
      current.next = node;
      current = node;
      console.log(current, i)
  }
  return dummyHead.next;
};

function nodeToArray(array, node) {
  const dummyHead = new ListNode();
  dummyHead.next = node;
  let current = dummyHead;
  while (current.next) {
      array.push(current.next.val);
      current = current.next;
  }
}