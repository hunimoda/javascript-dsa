function stringifyNumbers(obj) {
	const newObj = Array.isArray(obj) ? [] : {};

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "number") {
			newObj[key] = value.toString();
		} else if (typeof value === "object" && value) {
			newObj[key] = stringifyNumbers(value);
		} else {
			newObj[key] = value;
		}
	}

	return newObj;
}

console.log(
	stringifyNumbers({
		num: 1,
		test: [],
		data: {
			val: 4,
			info: {
				isRight: true,
				random: 66,
			},
		},
	})
);
