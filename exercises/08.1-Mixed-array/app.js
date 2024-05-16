let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let tipoDatos = [];
// Your code here
for(let i in mix){
    let elemento = mix[i]
    tipoDatos.push(typeof elemento);
}

console.log(tipoDatos);