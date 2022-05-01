//// my implementation -> O(n log(n))
//function same(arr1, arr2) {
//	// Check if both have same length
//	if (arr1.length !== arr2.length) return false;
//
//	// Sort both arrays in asc order (according to abs value)
//	arr1.sort(abs_size_order);  // O(n log(n))
//	arr2.sort(abs_size_order);  // O(n log(n))
//
//	// Compare if the element in arr2 is the square of the
//	// element in arr1 of the same pos -> O(n)
//	for (let i = 0; i < arr1.length; ++i) {
//		if (arr2[i] !== arr1[i] ** 2) return false;
//	}
//
//	// Return true if all elements match, false otherwise
//	return true;
//}
//
//// Compare function for sort method
//function abs_size_order(num1, num2) {
//	num1 = Math.abs(num1);
//	num2 = Math.abs(num2);
//
//	return num1 > num2 ? +1 : num1 == num2 ? 0 : -1;
//}

//// Bad implementation
//function same(arr1, arr2) {
//	if (arr1.length !== arr2.length) {
//		return false;
//	}
//
//	for (let i = 0; i < arr1.length; i++) {
//		const arr2Index = arr2.indexOf(arr1[i] ** 2);
//
//		if (arr2Index === -1) {
//			return false;
//		}
//
//		arr2.splice(arr2Index, 1);
//	}
//
//	return true;
//}

// Good implementation -> O(n)
function same(arr1, arr2) {
	// Return false if the length is different
	if (arr1.length !== arr2.length) {
		return false;
	}

	// Count each numbers how many time they appeared -> O(n)
	let freqCounter1 = countFrequency(arr1);
	let freqCounter2 = countFrequency(arr2);

	// Check if arr2 has the square value with the same freq -> O(n)
	for (let key in freqCounter1) {
		if (!(key ** 2 in freqCounter2)) {
			return false;
		}
		if (freqCounter2[key ** 2] !== freqCounter1[key]) {
			return false;
		}
	}

	return true;
}

// Frequency counter -> O(n)
function countFrequency(array) {
	const counter = {};

	for (let elem of array) {
		counter[elem] = (counter[elem] || 0) + 1;
	}

	return counter;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
console.log(same([-3, 0, 4], [16, 9, 0])); // true
