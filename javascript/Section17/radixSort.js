function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}

// function digitCount(num) {
//   if (num === 0) return 0;
//   return Math.abs(num).toString().length;
// }

// function digitCount(num) {
//   let count = 0;
//   for (let n = Math.abs(num); n > 0; n = Math.floor(n / 10))
//     count++;
//   return count;
// }

function digitCount(num) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigit = -1;
  nums.forEach(num => maxDigit = Math.max(maxDigit, digitCount(num)));
  return maxDigit;
}

function radixSort(nums) {
  const maxLength = mostDigits(nums);
  for (let i = 0; i < maxLength; i++) {
    const buckets = Array(10).fill().map(() => []);
    nums.forEach(num => buckets[getDigit(num, i)].push(num));
    nums = [].concat(...buckets);
  }
  return nums;
}
console.log(radixSort([1, 63, 61, 3, 34, 123, 66, 8, 15354, 463, 754, 34, 43]));