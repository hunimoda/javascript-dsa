// function countUniqueValues(arr) {
// 	// Declare counter variable
// 	let counter = 0;
// 	let prevElem = null;

// 	// Loop through all elements and increment counter
// 	// when new element is encountered
// 	for (const elem of arr) {
// 		if (elem !== prevElem) {
// 			counter++;
// 			prevElem = elem;
// 		}
// 	}

// 	// Return counter
// 	return counter;
// }

function countUniqueValues(arr) {
	if (arr.length === 0) return 0;

	// Declare two pointers
	const copy = Array.from(arr);
	let left = 0;

	// Keep moving the right pointer to the right
	for (let right = 1; right < copy.length; right++) {
		// If the element pointed by the left pointer
		// is different compared to the element pointed
		// by the right pointer, move the left pointer to the right
		// and put the element indicated by the left pointer
		if (copy[left] !== copy[right]) {
			copy[++left] = copy[right];
		}
	}

	// Return the left pointer + 1
	return left + 1;
}

console.log(countUniqueValues([]));

const arr = [-3, -2, -2, 0, 0, 0, 1, 2, 3];
console.log(countUniqueValues(arr));
console.log(arr);
console.log(countUniqueValues([1]));
console.log(countUniqueValues([1, 1]));
console.log(countUniqueValues([1, 2]));
console.log(countUniqueValues([1, 2, 2, 3]));
