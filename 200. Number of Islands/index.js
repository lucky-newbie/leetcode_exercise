/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/description/
 * 
 * 介绍：
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally
 * or vertically. You may assume all four edges of the grid are all surrounded by water.
 * 
 * example1：
 * Input:
    11110
    11010
    11000
    00000

  Output: 1
 *
 * example2:
 * Input:
    11000
    11000
    00100
    00011

  Output: 3
 */

const ISLAND = '1';
let totalX = 0; // 总行数
let totalY = 0; // 总列数
let usedArray = []; // 存放是否使用过的数据的数组， 默认都没有使用过
const direction = [{x: -1, y: 0},  {x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: -1}]; // 上/右/下/左四个方向偏移量

// 判断当前坐标是否在二维数组中
function inArray (x, y, totalX, totalY) {
    return x >= 0 && x < totalX && y >= 0 && y < totalY
}

// 构建二维数组，将查找的二维数组每个位置下元素，初始化为未使用状态
function createUsedArray(x, y) {
    const array = [];
    for (let i = 0; i < x; i++) {
      const tempArray = [];
      for (let j = 0; j < y; j++) {
        tempArray.push(false)
      }
      array.push(tempArray)
    }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  totalX = grid.length;
  if (grid && grid[0]) {
    totalY = grid[0].length;
    usedArray = createUsedArray(totalX, totalY);
    let result = 0;
    for (let x = 0; x < totalX; x++) {
      for (let y = 0; y < totalY; y++) {
        
        if (grid[x][y] === ISLAND && !usedArray[x][y]) {// 当前元素为陆地，并且未被使用过
          result = result + 1;
          dfs(grid, x, y)
          
        }
      }
    }
    return result;
  } else {
    return 0
  }
};

function dfs(grid, x, y) {
  usedArray[x][y] = true;
  for (let i =0;i < 4; i++) {
    const nextX = x + direction[i].x;
    const nextY = y + direction[i].y;
    if (inArray(nextX, nextY) && !usedArray[nextX][nextY] && grid[nextX][nexty] === ISLAND) {
      dfs(grid, nextX, nextY)
    }
  }
}

