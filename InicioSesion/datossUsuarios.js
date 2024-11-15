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

const boton = document.getElementById("boton_user");

boton.addEventListener("onclick", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

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
});