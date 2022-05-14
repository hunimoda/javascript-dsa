// function insertionSort(arr, compare) {
// 	for (let i = 1; i < arr.length; i++) {
// 		let j = 0;
// 		while (j < i) {
// 			if (compare(arr[i], arr[j]) > 0) break;
// 			j++;
// 		}
// 		if (j === i) continue;
// 		arr.splice(j, 0, arr.splice(i, 1)[0]);
// 	}
// 	return arr;
// }

function insertionSort(arr, compare) {
	for (let j, i = 1; i < arr.length; i++) {
		const currVal = arr[i];
		for (j = i - 1; j >= 0; j--) {
			if (compare(arr[j], currVal) > 0) break;
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currVal;
	}
	return arr;
}

const ascending = (a, b) => b - a;
const descending = (a, b) => -ascending(a, b);

console.log(insertionSort([8, 3, 5, 9, 0, 1, 4, 2, 7, 6], descending));
console.log(insertionSort([8, 3, 5, 9, 0, 1, 4, 2, 7, 6], ascending));
console.log(insertionSort([2, 1, 9, 76, 4], ascending));
console.log(insertionSort([], ascending));
console.log(insertionSort([1], ascending));
