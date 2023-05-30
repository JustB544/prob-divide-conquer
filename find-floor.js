function findFloor(arr, num) {
    let midIdx = 0;
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    if (arr[0] > num) {
        return -1;
    }
    if (arr[end] < num) {
        return arr[end];
    }
    while (count < 100) {
        midIdx = Math.floor((end - start) / 2 + start);
        if (arr[midIdx] < num) {
            start = midIdx;
        }
        else {
            end = midIdx
        }
        if (start + 1 === end) {
            break;
        }
        count++
    }
    return end;
}