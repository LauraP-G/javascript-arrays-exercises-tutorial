let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,11,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	let hoy = new Date;
	let FechaNacimiento = person.birthDate
	let edad = hoy.getFullYear() - person.birthDate.getFullYear();
	let cumpleAnos = new Date(hoy.getFullYear(), FechaNacimiento.getDate(), FechaNacimiento.getMonth())

	if(hoy < cumpleAnos){
		edad -= 1
	}
	// Your code here

	return 'Hello, my name is ' + person.name + ' and I am ' + edad + ' years old'
};

console.log(people.map(simplifier));
