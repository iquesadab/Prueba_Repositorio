
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

// Funcion: Bloque de codigo reutilizable que realiza una tarea especifica.

/* Crear una funcion para calcular el IMC con la siguiente formula:
IMC = peso / estatura^2
Mostrar en consola un mensaje que diga "El IMC es: "
Datos de prueba en kg       m       IMC
                   80      1.7     27.7
                   60      1.8     18.5
*/

function calcularIMC(peso, estatura){
                // (estatura*estatura) Lo mismo que Math.pow(estatura, 2)
    let imc = peso/ Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); //.toFixed(2): Para definir la cantidad de decimales
}

// Aqui estoy llamando la funcion, sino nunca me va a servir
calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Funcion con datos de salida (valor de retorno) El console.log es solo para nosotros, nunca para el cliente, por eso uso funciones con retorno
function calcularIMCRetorno(peso, estatura){
                // (estatura*estatura) Lo mismo que Math.pow(estatura, 2)
    let imc = peso/ Math.pow(estatura, 2);
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));

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


/* 
Crear una funcion para calcular el area de un rectangulo
Datos de prueba:     base     altura      area
                      5          3         15
                      4                    16  Si solo tengo la base, asumo que la altura es la misma
                      ""                  Error
                      ""         2        Error
                      0          2        Error
*/

function areaRectangulo(base, altura){
    // Condicional para asignar altura = base si solo hay un dato de entrada
    if (altura === undefined){ // undefined, si altura no esta definido
        altura = base;
    }
    
    if(typeof base !== "number" || typeof altura !== "number" || base <=0 || altura <=0){
        return "Error: Los datos deben ser numeros"
    }

    return base * altura;
}


console.log("El area del rectangulo es: " + areaRectangulo(5, 3));
console.log("El area del rectangulo es: " + areaRectangulo(5));
console.log( areaRectangulo("5"));
console.log(areaRectangulo(0, 2));



/*
Ejercicio: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre 
grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de entrada: Temperatura y escala a la cual se debe convertir la temperatura

conversión de temperatura  = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius  
conversión de temperatura  = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit    

Datos de prueba:    Temperatura     Escala a convertir      Resultado esperado
                    25                      F                       77
                    32                      C                       0
                    "100"                   C                       Error
                    0                       C                       Error
                    0                       F                       32
*/

// Como lo hizo la profesora
function convertirTemperatura(temperatura, escala){
    if (typeof temperatura !== "number"){
        return "Error: La temperatura debe ser un número";
    }
    if (escala !== "C" && escala !== "F"){
        return "Error: Unidad no válida (utilice C o F)";
    }

    // Conversión
    let resultadoConversion;
    if (escala === "C"){ //Fahrenheit a Celsius
        resultadoConversion = (temperatura - 32) * 5 / 9;
    } else{
        resultadoConversion = (temperatura * 9 / 5) + 32;
    }
    return resultadoConversion;
}
//Opcional: escala.toLowerCase() o escala.toUpperCase()

console.log(convertirTemperatura(25, "F")); // 77
console.log(convertirTemperatura(32, "C")); // 0
console.log(convertirTemperatura("32", "C")); // Error
console.log(convertirTemperatura(32, "a")); // Error

/* Como lo hice yo
function conversionAFahrenheit (temperatura){
    if(typeof temperatura !== "number"){
        return "Error: El digito ingresado debe ser numérico"
    }
    return ((temperatura * 9 / 5) + 32);
}

function conversionACelsius (temperatura){
    if(typeof temperatura !== "number" || temperatura <= 0){ // 0 C a F = 32 pero 0 F a C = -17.7778, por eso 0 F a C, debe dar un error
        return "Error: El digito ingresado debe ser numérico"
    }
    return ((temperatura - 32) * 5 / 9);
}

console.log(conversionAFahrenheit(25));
console.log(conversionAFahrenheit(0));
console.log(conversionAFahrenheit("100"));

console.log(conversionACelsius(32));
console.log(conversionACelsius(0)); 
console.log(conversionACelsius("100"));
*/