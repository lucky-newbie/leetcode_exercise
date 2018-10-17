/**
 * leetcode 79. Word Search
 * 地址：https://leetcode.com/problems/word-search/description/
 * 
 * 介绍：
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * 
 * example：
 * board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */




let totalX = 0; // 二维数组总共行数
let totalY = 0; // 二维数组总共列数
let usedArray; // 存放已使用的数据

// 二维数组，依次代表上右下左方向坐标
const direction = [{x: -1, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: -1}]


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    totalX = board.length;
    totalY = board[0].length;
    usedArray = createUsedArray();
    for (let row = 0; row < board.length; row ++) {
        for (let column = 0; column < board[row].length; column++) {
            if (searchWord(board, word, 0, row, column)) {
                return true;
            }
        }
    }
    return false;
};

/**
* 创建与当前board层级一样的二维数组，存放每个元素是否被使用过，默认都未使用
*/
function createUsedArray () {
    const array = [ ];
    for (let i = 0; i < totalX; i ++) {
        const column = [];
        for (let j = 0; j < totalY; j++) {
            column.push(false)
        }
        array.push(column)
    }
    return array
}

/**
* 判断当前坐标是否在二维数组中
* x/y： 坐标
* tatalX/totalY 二维数组总行数/总列数
*/
function inArray (x, y, totalX, totalY) {
    return (x >= 0 && x < totalX && y >=0 && y < totalY)
}


/**
* array: 二维数组
* word： 查找的字符串
* index: 当前查找字符串的第几个字母
* startX: 二维数组的行
* startY：二维数组的列
*/
function searchWord(array, word, index, startX, startY) {
    if (index === (word.length - 1)) { // 
        return array[startX][startY] === word.charAt(index);
    }
    // 如果当前坐标的数值等于当前查找字符串内容， 判断当前坐标的上下左右是否存在二维数组中
    // 如果存在二维数组中，判断该方向的数值是否被使用过，如果没有使用过，则继续递归
    if(array[startX][startY] === word.charAt(index)) { 
         usedArray[startX][startY] = true;
        for (let d = 0; d < 4; d++) { // 查找当前坐标的上下左右方向的坐标
            const newStatrX = startX + direction[d].x; // 得到当前坐标相邻方向行坐标
            const newStartY = startY + direction[d].y; // 得到当前坐标相邻方向列坐标
            // 判断当前坐标相邻方向是否在二维数组中
            if (inArray(newStatrX, newStartY, totalX, totalY)) {
               if (!usedArray[newStatrX][newStartY]) { // 判断数据是否被使用过
                   if (searchWord(array, word, index + 1, newStatrX, newStartY)) {
                       return true;
                   }
               }
            }
        }
        usedArray[startX][startY] = false;
       
    }
    return false;
    
}


