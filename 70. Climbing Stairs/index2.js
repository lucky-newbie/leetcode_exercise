/**玩转leetcode 9-2 */
/*动态规划*/
let memoryArray = []
var climbStairs = function(n) {
    memoryArray = usedArray(n);
    memoryArray[0] = 1;
    memoryArray[1] = 1;
    for (let i = 2; i <= n; i++) {
        memoryArray[i] = memoryArray[i-1] + memoryArray[i-2]
    }
    
    return memoryArray[n]
};

function usedArray (n) {
    const array = [];
    for (let i = 0; i < n+1; i++) {
        array[i] = -1
    }
    return array;
}