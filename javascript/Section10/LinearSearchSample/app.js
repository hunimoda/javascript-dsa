function indexOf(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) return i;
	}
	return -1;
}

console.log(indexOf([1, 2, 3, 4, 5], 3));
console.log(indexOf([1, 2, 3, 4, 5], -2));
