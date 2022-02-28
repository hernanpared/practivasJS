let numeros =[1,2,3,4,5];

console.log(numeros);

//acceder a sus datos

console.log(numeros[0])
console.log(numeros[3])

let palabras =["hola", "estamos", "bien"];

console.log(`La palabra "${palabras[0]}" tiene ${palabras[0].length} letras`)


//propiedad length, cantidad de posiciones que contiene el arrays

console.log(numeros.length);

//metodo array.isArray(variable a evaluar)--devuelve true si la variable es un array
let numero=3;
console.log(Array.isArray(palabras))
console.log(Array.isArray(numero))




