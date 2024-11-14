const {verificarUsuario} =  require('./registroUsuario/datosUsuario');




const input_nombre = document.getElementById("nombre");
const nombreMensaje = document.getElementById("nombre_mensaje");

const input_correo = document.getElementById("correo");
const correoMensaje = document.getElementById("correo_mensaje");

const input_contraseña = document.getElementById("contraseña");
const contraMensaje = document.getElementById("contra_mensaje");

// Función de validación en tiempo real para el nombre
function validarNombre() {
    const letras_nombre = input_nombre.value.trim();
    if (letras_nombre === "") {
        nombreMensaje.textContent = "Por favor, ingrese su nombre.";
        input_nombre.style.backgroundColor = "red";
    } else if (letras_nombre.length < 6) {
        nombreMensaje.textContent = "El nombre debe tener al menos 6 caracteres.";
        input_nombre.style.backgroundColor = "red";
    } else {
        nombreMensaje.textContent = "";
        input_nombre.style.backgroundColor = "lightGreen";
    }
}

// Función de validación en tiempo real para el correo
function validarCorreo() {
    const letras_correo = input_correo.value.trim();
    if (letras_correo === "") {
        correoMensaje.textContent = "Por favor, ingrese su correo.";
        input_correo.style.backgroundColor = "red";
    } else if (!letras_correo.includes("@") || letras_correo.length < 10) {
        correoMensaje.textContent = "Ingrese un correo válido.";
        input_correo.style.backgroundColor = "red";
    } else {
        correoMensaje.textContent = "";
        input_correo.style.backgroundColor = "lightGreen";
    }
}

// Función de validación en tiempo real para la contraseña
function validarContraseña() {
    const letras_contraseña = input_contraseña.value.trim();
    if (letras_contraseña === "") {
        contraMensaje.textContent = "Por favor, ingrese su contraseña.";
        input_contraseña.style.backgroundColor = "red";
    } else if (letras_contraseña.length < 6) {
        contraMensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        input_contraseña.style.backgroundColor = "red";
    } else {
        contraMensaje.textContent = "";
        input_contraseña.style.backgroundColor = "lightGreen";
    }
}

// Escuchar el evento de input en cada campo para validación en tiempo real
input_nombre.addEventListener("input", validarNombre);
input_correo.addEventListener("input", validarCorreo);
input_contraseña.addEventListener("input", validarContraseña);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    let esValido = true;

    if (input_nombre.value.trim() === "" || input_nombre.value.trim().length < 6) {
        esValido = false;
    }
    if (input_correo.value.trim() === "" || !input_correo.value.includes("@") || input_correo.value.trim().length < 10) {
        esValido = false;
    }
    if (input_contraseña.value.trim() === "" || input_contraseña.value.trim().length < 6) {
        esValido = false;
    }
    if (!esValido) {
        event.preventDefault();
        alert("Por favor, complete correctamente todos los campos.");
    }
    if (esvalido){
        var nombre = document.getElementById("input_nombre");
        var correo = document.getElementById("input_correo");
        var contraseña = document.getElementById("input_contraseña");

    }
});
