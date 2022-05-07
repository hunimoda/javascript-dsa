function sameFrequency(n1, n2) {
	// 1. If the numbers have different length, frequency cannot match
	if (n1.toString().length !== n2.toString().length) {
		return false;
	}

	const counter = {};

	// 2. Fill counter with digit frequencies of n1
	while (n1) {
		counter[n1 % 10] = (counter[n1 % 10] || 0) + 1;
		n1 = Math.floor(n1 / 10);
	}

	// 3. Decrement counter for each digit in n2
	while (n2) {
		if (!counter[n2 % 10]) return false;

		counter[n2 % 10]--;
		n2 = Math.floor(n2 / 10);
	}

	return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
