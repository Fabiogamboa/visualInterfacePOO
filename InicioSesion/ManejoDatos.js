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
    }else if (!letras_correo.includes("@") || letras_correo.length < 10 || !letras_correo.includes(".com")){
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

var boton_inicio = document.getElementById("boton_inicio");

boton_inicio.addEventListener("click", function() {
    let esValido = true;

    if (input_nombre.value.trim() === "" || input_nombre.value.trim().length < 6) {
        esValido = false;
    }
    if (input_correo.value.trim() === "" || !input_correo.value.includes("@") || input_correo.value.trim().length < 10 || input_correo.value.includes(".com")) {
        esValido = false;
    }
    if (input_contraseña.value.trim() === "" || input_contraseña.value.trim().length < 6) {
        esValido = false;
    }
    if (!esValido) {
        alert("Por favor, complete correctamente todos los campos.");
    }
    if (esValido === true) {
        const nombre = input_nombre.value.trim();
        const correo = input_correo.value.trim();
        const contraseña = input_contraseña.value.trim();
        let resultado = validarDatos(nombre, correo, contraseña);
        if (resultado === true) {
            alert("Inicio de sesión exitoso.");
            window.location.href="ppt.html"
        } else {
            alert("Datos incorrectos. Por favor, verifique su nombre, correo y contraseña.");
        }
    }
});

// apartado para funciones de registroUser

var datos = [];

function validarDatos(nombre, correo, contraseña) {
    for (let i = 0; i < datos.length; i++) {
        if (datos[i][0] === nombre && datos[i][1] === correo && datos[i][2] === contraseña) {
            return true;  
        }
    }
    return false;  
}

class User { 
    constructor(nombre, correo, contraseña) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
    }

    añadirInfo() {
        datos.push([this.nombre, this.correo, this.contraseña]);
    }
}

function registroUser() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    let esValido = true;

    if (nombre.trim() === "" || correo.trim() === "" || contraseña.trim() === "") {
        esValido = false;
    }

    if (!esValido) {
        alert("Por favor, complete correctamente todos los campos.");
    } else {
        const nuevoUsuario = new User(nombre, correo, contraseña);
        nuevoUsuario.añadirInfo();
        console.log(datos);
        alert("Usuario añadido correctamente.");
        
        // Limpiar los campos
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contraseña").value = "";
    }
};
