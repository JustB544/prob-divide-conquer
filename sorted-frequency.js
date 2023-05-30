function sortedFrequency(arr, num) {
    let midIdx = 0;
    let start = 0;
    let end = arr.length - 1;
    let count = 0;
    const add = (arr[0] === num) ? 1 : 0;
    if (arr[end] < num) {
        return -1;
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
    let first = start;
    if (end === arr.length - 1) {
        return 1;
    }
    end = arr.length - 1;
    count = 0;
    while (count < 100) {
        midIdx = Math.floor((end - start) / 2 + start);
        if (arr[midIdx] <= num) {
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
    return start - first + add;
}