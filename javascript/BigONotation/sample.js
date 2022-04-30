function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

function addUpToFast(n) {
	return (n * (n + 1)) / 2;
}

const t1 = performance.now();
//addUpTo(1000000000);
addUpToFast(1000000000);
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
