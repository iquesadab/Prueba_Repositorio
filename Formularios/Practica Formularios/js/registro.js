// Variables
let btnCrear = document.getElementById("crearCuenta");

let txtUsuario = document.getElementById("txtUsuario");
let txtContrasena = document.getElementById("txtContrasena");
let txtConfirmar = document.getElementById("txtConfirmar");

// Funcion principal
function crearCuentaRetorno(){

    let usuario = txtUsuario.value;
    let contrasena = txtContrasena.value;
    let confirmar = txtConfirmar.value;

    // Validar campos vacíos
    if(validarCamposVacios() === false){

        // Validar contraseñas
        if(contrasena !== confirmar){

            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden",
                icon: "warning",
                confirmButtonText: "Aceptar"
            });

            return;
        }
        else{
            Swal.fire({
            title: "Cuenta creada con éxito!",
            icon: "success",
            confirmButtonText: "OK"
            });

            txtUsuario.value = "";
            txtContrasena.value = "";
            txtConfirmar.value = "";
        }

    }
    else{
        Swal.fire({
            title: "No se puede registrar",
            text: "Por favor revise los campos",
            icon: "warning",
            confirmButtonText: "Aceptar"
        });
    }
}

// Validar campos
function validarCamposVacios(){

    let error = false;

    // Usuario
    if(txtUsuario.value === ""){
        txtUsuario.classList.add("input-error");
        error = true;
    } else {
        txtUsuario.classList.remove("input-error");
    }

    // Contraseña
    if(txtContrasena.value === ""){
        txtContrasena.classList.add("input-error");
        error = true;
    } else {
        txtContrasena.classList.remove("input-error");
    }

    // Confirmar
    if(txtConfirmar.value === ""){
        txtConfirmar.classList.add("input-error");
        error = true;
    } else {
        txtConfirmar.classList.remove("input-error");
    }

    return error;
}

btnCrear.addEventListener("click", crearCuentaRetorno);