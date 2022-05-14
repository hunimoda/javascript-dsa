function reverse(str) {
	if (str === "") return "";
	return reverse(str.substring(1)) + str[0];
}

console.log(reverse(""));
console.log(reverse("a"));
console.log(reverse("abc"));
console.log(reverse("Hello World"));
