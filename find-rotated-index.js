function findRotatedIndex(arr, num) {
    const i0 = arr[0];
    const i1 = arr[arr.length - 1];
    let midIdx = 0;
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    let dir = num <= i1;
    while (count < 100) {
        midIdx = Math.floor((end - start) / 2 + start);
        if (arr[midIdx] === num) {
            end = midIdx;
            break;
        }
        if (arr[midIdx] > num) {
            if (dir) {
                start = midIdx;
            }
            else {
                end = midIdx;
            }
        }
        else {
            if (dir && i1 < arr[midIdx]) {
                end = midIdx;
            }
            else {
                start = midIdx;
            }
        }
        if (start + 1 === end) {
            end = -1;
            break;
        }
        count++
    }
    return end;
}