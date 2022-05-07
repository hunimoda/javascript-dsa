function isSubsequence(target, source) {
	let tgIdx = 0;

	for (const char of source) {
		if (char === target[tgIdx]) tgIdx++;
		if (tgIdx >= target.length) return true;
	}

	return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
