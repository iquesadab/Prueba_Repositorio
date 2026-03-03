
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