let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
//SOLUCION 2
//function findMax(arr){
//    let aux = arr[0];
//   for (element of arr){
//       if(element > aux){
//           aux = element;
//       }
//   }
//   return aux;
//}


const findMax = (arr) => {
   let aux = 0;
    for( let i = 0; i < arr.length; i++){
       if(arr[i] > aux){
           aux = arr[i]
        }
   }
   return aux;
}




console.log(findMax(myArray))