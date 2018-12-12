/**
 * 方式二
 */
/**
 * 无需创建usedArray，如果访问过的陆地grid[x][y]则置为0
 */


const ISLAND = '1';
let totalX = 0; // 总行数
let totalY = 0; // 总列数
const direction = [{x: 0, y: 1}, {x: 1, y: 0}, {x: 0, y: -1}, {x: -1, y: 0}]; // 上/右/下/左四个方向偏移量

// 判断当前坐标是否在二维数组中
function inArray (x, y,totalX, totalY) {
    return x >= 0 && x < totalX && y >= 0 && y < totalY
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  totalX = grid.length;
  if (grid && grid[0]) {
    totalY = grid[0].length;
    let result = 0;
    for (let i = 0; i < totalX; i++) {
      for (let j = 0; j < totalY; j++) {
        if (grid[i][j] === ISLAND) {// 当前元素为陆地，并且未被使用过
          result ++;
          dfs(grid, i, j, totalX, totalY)
        }
      }
    }
    return result;
  } else {
    return 0
  }
};

function dfs(grid, x, y, totalX, totalY) {
  grid[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    const nextX = x + direction[i].x;
    const nextY = y + direction[i].y;
    if (inArray(nextX, nextY, totalX, totalY) && grid[nextX][nextY] === ISLAND) {
      dfs(grid, nextX, nextY, totalX, totalY)
    }
  }
  return;
}