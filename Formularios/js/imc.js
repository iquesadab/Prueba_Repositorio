// Variables
let btnCalcularIMC = document.getElementById("btnCalcularIMC");

let txtPeso = document.getElementById("txtPeso");
let txtEstatura = document.getElementById("txtEstatura");

let parrafoResultado = document.querySelector("#sctResultadoIMC p"); //Para ubicar un elemento dentro del codigo, y un elemento dentro de esa seccion p en este caso

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
//calcularIMC(80, 1.7);
//calcularIMC(60, 1.8);

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
// function calcularIMCRetorno(){
//   console.log("Evento de clic");
//}

function calcularIMCRetorno(){
    let peso = txtPeso.value;
    let estatura = txtEstatura.value;

    let imc = peso / Math.pow(estatura, 2);
    // parrafoResultado.innerText = imc.toFixed(2);
    if (validarCamposVacios() === false){
        parrafoResultado.innerText = imc.toFixed(2);
    }
    else{
        // Esta es una alerta y la link desde el html, es de una pagina externa que me permite poner alertas
        Swal.fire({
            title: "No se puede calcular el IMC",
            text: "Por favor revise los campos resaltados",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
    
}

function validarCamposVacios(){
    let error = false; // Para asumir por defecto que no existen errores
    if (txtPeso.value === ""){
        txtPeso.classList.add("input-error");
        error = true;
    } else {
        txtPeso.classList.remove("input-error");
    }
    if (txtEstatura.value === ""){
        txtEstatura.classList.add("input-error");
        error = true;
    } else {
        txtEstatura.classList.remove("input-error");
    }
    return error;
}

// Escuchador de eventos
btnCalcularIMC.addEventListener("click", calcularIMCRetorno);





