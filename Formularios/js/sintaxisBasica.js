/* Así se hacen los 
comentarios multilinea*/

// Comentario de una linea

// console.log es equivalente a system.out.println en Java: Mensaje en consola
console.log ("Mensaje en consola");
console.log ("Mensaje en consola");

// Constante: Valor que no cambia durante la ejecución de un programa. El nombre va en mayuscula siempre.

const PI = 3.14;
console.log(PI);

const MAX_USUARIOS = 100; // Uso guion bajo para separar varias palabras en una constante
console.log(MAX_USUARIOS);

const GRAVEDAD = 9.18;
console.log(GRAVEDAD);

const TIPO_USUARIO = "Visitante";
console.log(TIPO_USUARIO);

// Variable: Espacio de memoria en la computadora, en donde un programa almacena un dato que puede o no cambiar durante la ejecución.
/* Forma incorrecta (no se permite su uso en el curso)
var nombreVariable = "datoAlmacenado";
console.log(nombreVariable);
var numeroAleatorio = 15;
console.log(numeroAleatorio);
*/

// Forma adecuada de crear variables
let nombrePerro = "Mia";
console.log("Variable con el nombre de un perro: " + nombrePerro);
nombrePerro = "Minnie";
console.log("Variable con el nombre de un perro: " + nombrePerro);

// Creo la variable sin inicializarla
let nombreGato;
console.log("Variable con el nombre de un gato: " + nombreGato);

// Asi la inicializo
nombreGato = "Mimi";
console.log("Variable con el nombre de un gato: " + nombreGato);

// Ejercicio: Crear una variable que almacene un String y crear otra 
// variable que almacene un dato numerico.

let miPerro = "Tobby";
let edadPerro;
console.log("El nombre de mi perro es: " + miPerro);

edadPerro = 2;
console.log("La edad de mi perro es: " + edadPerro);


/* 
== : comparar el valor
Python:
    5 == 5: Verdadero
    "5" == 5: Falso
JavaScript:
    5 == 5: Verdadero
    "5" == 5: Verdadero porque JS compara solo el valor

=== : compara el tipo y el valor
    5 === 5: Verdadero (JS primero compara el tipo de dato y luego compara el valor)
    "5" == 5: Falso (JS compara el tipo de dato y el valor)

    "5" !== 5: Verdadero
*/

console.log("5" == 5); // Se compara solo el valor
console.log("5" === 5); // Se compara el tipo de dato y el valor
console.log("10" != 10); // Se compara solo el valor
console.log("10" !== 10); // Se compara el tipo de dato y el valor
