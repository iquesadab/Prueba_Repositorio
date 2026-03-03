let btnCalcularIMC = document.getElementById("btnCalcularIMC");


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

/* COMENTADO PORQUE HARE EL MISMO PERO CON UNOS CAMBIOS
// Funcion con datos de salida (valor de retorno) El console.log es solo para nosotros, nunca para el cliente, por eso uso funciones con retorno
function calcularIMCRetorno(peso, estatura){
                // (estatura*estatura) Lo mismo que Math.pow(estatura, 2)
    let imc = peso/ Math.pow(estatura, 2);
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));
*/

// Con la funcion de esta manera ya no necesito ni parametros ni todo
// lo demas porque estoy usando el ID del html (primer linea) y ademas
// el escuchador de eventos (ultima linea)
function calcularIMCRetorno(){
    console.log("Evento de clic");
}

// Escuchador de eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);





