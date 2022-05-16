function merge(arr1, arr2) {
	let i = 0, j = 0;
	const merged = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
		else merged.push(arr2[j++]);
	}
	merged.push(...arr1.slice(i), ...arr2.slice(j));
	return merged;
}
