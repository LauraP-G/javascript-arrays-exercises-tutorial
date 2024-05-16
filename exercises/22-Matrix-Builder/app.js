// Your code here
function matrixBuilder(num){
    let arrMatrix = [];
    let fila = [];
    for(let i = 0; i < num; i++){
        for(let x = 0; x < num; x ++){
             fila.push(Math.floor(Math.random()*2))
        }
        arrMatrix.push(fila)
    }
  
    return arrMatrix;
}



// Do not change anything from this line down
console.log(matrixBuilder(5))
