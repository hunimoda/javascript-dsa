function averagePair(arr, avg) {
	const targetSum = avg * 2;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const tempSum = arr[left] + arr[right];
		if (tempSum === targetSum) return true;

		if (tempSum > targetSum) right--;
		else left++;
	}

	return false;
}
