function collectOddValues(arr) {
	if (arr.length === 0) return [];

	return (arr[0] % 2 ? [arr[0]] : []).concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
