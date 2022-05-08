function findLongestSubstring(str) {
	const counter = {};
	let maxLength = 0;

	let start = 0;
	let end = -1;

	while (end < str.length - 1) {
		while (counter[str[end + 1]]) {
			counter[str[start++]] = 0;
		}

		counter[str[++end]] = 1;
		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 5
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
