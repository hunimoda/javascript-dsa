function sumZero(arr) {
	// Declare two pointers that point the front and the end
	let start = 0;
	let end = arr.length - 1;
	let sum = null;

	// Loop while the left pointer is less than or equal to the right pointer
	while (start <= end) {
		sum = arr[start] + arr[end];

		// If the sum is 0, return the elements as an array
		if (sum === 0) {
			return start === end ? [arr[start]] : [arr[start], arr[end]];
		}

		// If the sum is larger than 0, move right pointer
		// Else, move left pointer
		sum > 0 ? end-- : start++;
	}

	// return null (not found)
	return null;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(sumZero([-5, -3, -2, 0, 1, 4, 6]));
