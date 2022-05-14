function flatten(arr) {
	const flattened = [];

	for (const elem of arr) {
		if (Array.isArray(elem)) {
			flattened.push(...flatten(elem));
		} else {
			flattened.push(elem);
		}
	}

	return flattened;
}
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
