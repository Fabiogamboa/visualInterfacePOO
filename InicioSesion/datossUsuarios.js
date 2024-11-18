var datos = new Map();

function validarDatos(nombre, correo, contraseña) {
    const usuario = datos.get(correo);
    if (usuario && usuario.nombre === nombre && usuario.contraseña === contraseña) {
        return true;
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
        datos.set(this.correo, { nombre: this.nombre, contraseña: this.contraseña });
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
}
