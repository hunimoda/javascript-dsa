function naiveStringSearch(haystack, needle) {
	let n = 0;
	let count = 0;
	for (let h = 0; h < haystack.length; h++) {
		n = haystack[h] === needle[n] ? n + 1 : 0;
		if (n === needle.length) {
			count++;
			n = 0;
		}
	}
	return count;
}

console.log(naiveStringSearch("Hello World", "o"));
console.log(naiveStringSearch("Hello World", "l"));
console.log(naiveStringSearch("Hello World", ""));
console.log(naiveStringSearch("Hello, yellow melon jacob mello", "yacob"));
