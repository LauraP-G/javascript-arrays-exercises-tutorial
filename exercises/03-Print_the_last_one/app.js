function generateRandomArray()
{
	let auxArray = [];
	let randomLength = Math.floor(Math.random()*100);
	for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
let myStupidArray = generateRandomArray();

// Your code here
//let theLastOne = myStupidArray.length
//console.log(theLastOne) // conocemos el número de elementos del array
//console.log(myStupidArray[theLastOne -1]); //imprimimos el valor de último elemento


//segunda forma de hacerlo
let theLastOne = myStupidArray[myStupidArray.length -1];
console.log(theLastOne)