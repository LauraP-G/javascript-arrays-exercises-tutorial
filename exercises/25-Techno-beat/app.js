// Your code here
const lyricsGenerator= (arr) =>{
    let musicDj = "";
    let cero = "Boom";
    let uno = "Drop the bass"
    let tripleUno = "!!!Break the bass!!!"
    let contador = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            musicDj += cero + " ";
        }
        else if (arr[i] === 1){
            musicDj += uno + " ";
            contador++;

                if(contador == 3) {
                musicDj += tripleUno + " ";
                contador = 0;
            }
        }

    }

    return musicDj
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
