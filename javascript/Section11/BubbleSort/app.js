function bubbleSort(arr, compare) {
	for (let i = arr.length - 1; i >= 1; i--) {
		let swapped = false;
		for (let j = 0; j < i; j++) {
			if (compare(arr[j], arr[j + 1]) > 0) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return arr;
}

function ascendingNumbers(num1, num2) {
	return num1 - num2;
}

console.log(bubbleSort([1, 2, 3, 4, 7, 8, 5, 5, 7, 9], ascendingNumbers));
