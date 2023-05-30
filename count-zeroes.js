function countZeroes(arr) {
    let midIdx = 0;
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    if (arr[end] === 1) {
        return 0;
    }
    while (count < 100) {
        midIdx = Math.floor((end - start) / 2 + start);
        if (arr[midIdx] === 1) {
            start = midIdx;
        }
        else {
            end = midIdx
        }
        if (start === end) {
            break;
        }
        count++
    }
    return arr.length - end;
}
