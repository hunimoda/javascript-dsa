function minSubArrayLen(arr, targetSum) {
	// Create minLength variable
	let minLength = 0;
	let currSum = 0;
	// Increment minLength until sum from idx: 0 to
	//  idx: (minLength - 1) becomes >= targetSum
	// If minLength exceeds array length while incrementing,
	//  return 0
	while (currSum < targetSum) {
		if (minLength >= arr.length - 1) return 0;
		currSum += arr[minLength++];
	}
	// Create end variable and set to (minLength - 1)
	// Loop until end becomes >= array.length
	for (let end = minLength - 1; end < arr.length; end++) {
		// Try to decrease minLength if possible
		while (currSum - arr[end - minLength + 1] >= targetSum) {
			currSum -= arr[end - minLength + 1];
			minLength--;
		}
		currSum += arr[end + 1] - arr[end - minLength + 1];
	}
	// Return minLength
	return minLength;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
