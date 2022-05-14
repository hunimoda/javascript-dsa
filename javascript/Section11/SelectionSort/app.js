function selectionSort(arr, compare) {
	for (let i = 0; i <= arr.length - 2; i++) {
		let pivot = i;
		for (let j = i + 1; j <= arr.length - 1; j++) {
			if (compare(arr[pivot], arr[j]) > 0) pivot = j;
		}
		if (pivot !== i) [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
	}
	return arr;
}

// console.log(selectionSort([5, 8, 1, 3, 0, 9, 2, 4, 7, 6], (a, b) => b - a));
console.log(
	selectionSort(
		["ab", "dcg", "f", "16h8d", "", "sddkfj"],
		(s1, s2) => s2.length - s1.length
	)
);
