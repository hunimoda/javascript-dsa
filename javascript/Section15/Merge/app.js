function merge(arr1, arr2) {
	const merged = [];
	let i = 0, j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
		else merged.push(arr2[j++]);
	}
	merged.push(...arr1.slice(i), ...arr2.slice(j));
	return merged;
}

function mergeSort(arr) {
	if (arr.length <= 1) return [...arr];
	return merge(mergeSort(arr.slice(0, arr.length / 2)),
							 mergeSort(arr.slice(arr.length / 2)));
}

console.log(mergeSort([6, 9, 10, -3, 8, 5, -9, 2], [13, 18, 3, -5, -4, 1, 0, 7]));