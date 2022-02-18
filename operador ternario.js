let a = 2;
let b = 4;
let c = 5;

//operador ternario
/*sintaxis:

(condicion) ? true : false

evalua una condicion , la misma debe ser true o false

*/

//a % 2 === 0 ? console.log(`${a} es par`) : console.log(`$(a) es impar`);

//en el caso de tener varias sentencias se trabaja de la siguiente forma:

a % 2 === 0 ?
 (
     console.log(`${a} es par`), console.log(`${a} divisible 2`)
     )
  : 
  console.log(`${a} es impar`);
