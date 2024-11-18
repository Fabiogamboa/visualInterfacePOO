const input_nombre = document.getElementById("nombre");
const nombreMensaje = document.getElementById("nombre_mensaje");

const input_correo = document.getElementById("correo");
const correoMensaje = document.getElementById("correo_mensaje");

const input_contraseña = document.getElementById("contraseña");
const contraMensaje = document.getElementById("contra_mensaje");

function validarNombre() {
    const letras_nombre = input_nombre.value.trim();
    if (letras_nombre === "") {
        nombreMensaje.textContent = "Por favor, ingrese su nombre.";
        input_nombre.classList.add("error");
    } else if (letras_nombre.length < 6) {
        nombreMensaje.textContent = "El nombre debe tener al menos 6 caracteres.";
        input_nombre.classList.add("error");
    } else {
        nombreMensaje.textContent = "";
        input_nombre.classList.remove("error");
        input_nombre.classList.add("success");
    }
}

function validarCorreo() {
    const letras_correo = input_correo.value.trim();
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (letras_correo === "") {
        correoMensaje.textContent = "Por favor, ingrese su correo.";
        input_correo.classList.add("error");
    } else if (!regexCorreo.test(letras_correo)) {
        correoMensaje.textContent = "Ingrese un correo válido.";
        input_correo.classList.add("error");
    } else {
        correoMensaje.textContent = "";
        input_correo.classList.remove("error");
        input_correo.classList.add("success");
    }
}

function validarContraseña() {
    const letras_contraseña = input_contraseña.value.trim();
    if (letras_contraseña === "") {
        contraMensaje.textContent = "Por favor, ingrese su contraseña.";
        input_contraseña.classList.add("error");
    } else if (letras_contraseña.length < 6) {
        contraMensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        input_contraseña.classList.add("error");
    } else {
        contraMensaje.textContent = "";
        input_contraseña.classList.remove("error");
        input_contraseña.classList.add("success");
    }
}

input_nombre.addEventListener("input", validarNombre);
input_correo.addEventListener("input", validarCorreo);
input_contraseña.addEventListener("input", validarContraseña);

var boton_inicio = document.getElementById("boton_inicio");

boton_inicio.addEventListener("click", function() {
    let esValido = true;

    if (input_nombre.value.trim() === "" || input_nombre.value.trim().length < 6) {
        esValido = false;
    }
    if (input_correo.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input_correo.value.trim())) {
        esValido = false;
    }
    if (input_contraseña.value.trim() === "" || input_contraseña.value.trim().length < 6) {
        esValido = false;
    }
    if (!esValido) {
        alert("Por favor, complete correctamente todos los campos.");
    }
});
