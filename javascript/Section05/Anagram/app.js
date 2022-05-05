function validAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;

	// 1 - 1. Create frequency counter object
	const counter = {};

	// 1 - 2. Fill in the object
	for (const char of str1) {
		counter[char] = (counter[char] || 0) + 1;
	}

	for (const char of str2) {
		// 2 - 1. If char doesn't exist anymore in counter, it is invalid
		if (!counter[char]) return false;

		// 2 - 2. Decrement counter for each char in str2
		counter[char]--;
	}

	// 3. Else, return true
	return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
