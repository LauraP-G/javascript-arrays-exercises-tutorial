let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
const mergeTwoList = (array) =>{
    let arrayUnido =[]
    let odd = []
    let even = []

    even = array.filter((numero) => numero % 2 == 0 )
    odd = array.filter ((numero) => numero % 2 != 0)
    arrayUnido = odd.concat(even)

    //Opcion con bucle for y push
     //for(let i=0; i < array.length ; i ++){
      //  if(array[i] % 2 == 0){
        //    even.push(array[i])
        //}
        //else {
         //   odd.push(array[i])
        //}
    //}


    return arrayUnido;
    
}

console.log(mergeTwoList(listOfNumbers))