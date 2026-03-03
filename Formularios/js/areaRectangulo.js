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