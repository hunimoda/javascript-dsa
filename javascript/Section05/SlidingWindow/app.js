function maxSubarraySum(arr, num) {
	if (num > arr.length) return null;

	let currentSum = 0;
	for (let i = 0; i < num; i++) {
		currentSum += arr[i];
	}

	let maxSum = currentSum;
	for (let i = 1; i <= arr.length - num; i++) {
		currentSum += arr[i - 1 + num] - arr[i - 1];
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
