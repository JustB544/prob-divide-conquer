function findRotationCount(arr) {
    let midIdx = 0;
    let start = 0;
    let end = arr.length - 1;
    let count = 0
    let prev = arr[0];
    if (arr[0] < arr[end]) {
        return 0;
    }
    while (count < 100) {
        midIdx = Math.floor((end - start) / 2 + start);
        if (arr[midIdx] > prev) {
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