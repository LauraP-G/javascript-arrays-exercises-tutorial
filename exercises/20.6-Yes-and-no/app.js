let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
const wikiWoko = (elemento) => {
    if(elemento === 1){
        elemento = "wiki"
    }
    else {
        elemento = "woko"
    }
    return elemento;
}

let arrDesgosado = theBools.map(wikiWoko)
console.log(arrDesgosado)
