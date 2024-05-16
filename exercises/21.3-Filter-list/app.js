let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here

const filterByName = function(arr, filtro){
    let nuevoArray = arr.filter((nombre) =>
       nombre.toLowerCase().includes(filtro)
    );
    return nuevoArray;
}




/*solucion 2 
const filterByName = function(arr, filtro){
    let nuevoArray =[];
    for(let nombre of arr){
      if(nombre.toLowerCase().includes(filtro)){
        nuevoArray.push(nombre)
      }
      else continue;
    }
    return nuevoArray;
}*/
console.log(filterByName(names, 'am'));
