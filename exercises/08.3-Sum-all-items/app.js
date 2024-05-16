function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let elemento in theArray){
		total += theArray[elemento]
	}
	return total;
}
let array = [2, 5, 7, 26];

console.log(sumTheElements(array))