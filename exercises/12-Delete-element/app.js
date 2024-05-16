let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below

const deletePerson = (nombre) => {
   let newArray = people.filter((element)=> element != nombre);
   return newArray;
}



console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

