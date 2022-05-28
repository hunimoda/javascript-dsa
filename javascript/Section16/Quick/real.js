function pivotHelper(arr, start = 0, end = arr.length - 1) {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++)
    if (arr[i] < pivot) swap(i, ++swapIdx);
  swap(start, swapIdx);

  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pivot = pivotHelper(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
  return arr;
}

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
quickSort(arr);
console.log(arr);