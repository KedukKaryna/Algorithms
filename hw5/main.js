function quickSortDescending(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partitionDescending(arr, left, right);
        quickSortDescending(arr, left, pivotIndex - 1);
        quickSortDescending(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partitionDescending(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] > pivot) { 
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}


const array = [34, 7, 23, 32, 5, 62];
console.log(quickSortDescending(array))