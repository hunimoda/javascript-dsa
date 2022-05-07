function areThereDuplicates(...args) {
	const counter = {};

	// Loop through all elements of args and check for duplicates
	for (const elem of args) {
		if (elem in counter) return true;
		counter[elem] = true;
	}

	return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
