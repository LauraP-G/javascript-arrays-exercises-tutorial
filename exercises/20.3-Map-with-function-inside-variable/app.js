let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

let prepender = function(name) {
	return 'My name is: '+name;
};

// Your code here
let identificarse = names.map(prepender)
console.log(identificarse);

/*Otra opción utilizando map como funcion
let identificarse = names.map(function(elemento){
	return "My name is: " + elemento;
})
console.log(identificarse)
*/