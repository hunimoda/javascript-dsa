function binarySearch(arr, target) {
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (arr[mid] > target) {
			end = mid - 1;
		} else if (arr[mid] < target) {
			start = mid + 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(binarySearch([1, 2, 3, 5, 7, 8, 10, 13, 17], 10));
console.log(binarySearch([1, 2, 3, 5, 7, 8, 10, 13, 17], 14));
