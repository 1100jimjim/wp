function array_min(a) {
    if (a.length === 0) {
        return {array: a, min: undefined}; // 如果数组为空，返回 undefined
    }
    
    let min = a[0]; // 假设第一个元素是最小的
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i]; // 更新最小值
        }
    }
    
    return {array: a, min: min};
}

// 示例用法
let arr = [5, 3, 9, 1, 7];
let result = array_min(arr);
console.log("陣列:", result.array); // 输出数组: [5, 3, 9, 1, 7]
console.log("minimun:", result.min); // 输出最小值: 1
