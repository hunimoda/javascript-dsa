// function quickSort(arr) {
//   function swap(i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }

//   if (arr.length <= 1) return arr;
//   const pivot = arr[0];
//   let numOfSmall = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= pivot) continue;
//     swap(i, numOfSmall++ + 1);
//   }
//   swap(0, numOfSmall);
//   return [...quickSort(arr.slice(0, numOfSmall)), pivot,
//           ...quickSort(arr.slice(numOfSmall + 1))];
// }

function quickSort(arr, start = 0, end = arr.length) {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  if (end - start <= 1) return arr;
  const pivot = arr[start];
  let numOfSmall = 0;
  for (let i = start + 1; i < end; i++)
    if (arr[i] < pivot) swap(i, start + numOfSmall++ + 1);
  swap(start, start + numOfSmall);
  quickSort(arr, start, start + numOfSmall);
  quickSort(arr, start + numOfSmall + 1, end);
  return arr;
}

const notSorted = [];
for (let i = 0; i < 1000; i++)
  notSorted.push(Math.floor(Math.random() * 100));

console.log(quickSort(notSorted));