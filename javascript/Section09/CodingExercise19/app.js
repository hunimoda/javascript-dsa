function capitalizeFirst(arr) {
	if (arr.length === 1) {
		const str = arr[0];
		return [str.charAt(0).toUpperCase() + str.slice(1)];
	}

	return [...capitalizeFirst([arr[0]]), ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
