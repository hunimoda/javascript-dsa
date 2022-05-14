function collectStrings(obj) {
	const arr = [];

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "string") {
			arr.push(value);
		} else if (typeof value === "object" && value) {
			arr.push(...collectStrings(value));
		}
	}

	return arr;
}
