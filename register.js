document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // nota mental no tan mental, el .trim() se ussa para eliminar espacios en blanco xd
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    // para aclarar, el hecho de usar los nombres de las variables es como tener un true o false, si hay un campo que no está
    // seria true,true, false : por lo tanto seria false y no se ejecutaria el if y seguiria con el else
    if (nombre && correo && contraseña) {
        // Se crea un nuevo objeto :v
        const usuario = {
            nombre: nombre,
            correo: correo,
            contraseña: contraseña
        };

        // como usé el local storage, esto lo uso para obtener datos guardados si es que habian y si no, se crea una lista nueva xd
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // se agrega el nuevo usuario a la lista de usuarios :v
        usuarios.push(usuario);

        // se guarda la lista actualizada de usuarios en localStorage, se usa el strongify para convertir los ddtos en texto, y ya despues
        // en el login.js se usa el parse para devolver los datos a su forma original :v
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // esto simplemente lo puse para saber si servia el href, y como si, lo deje como easter egg :v
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "index.html";
    } else {
        // si hay campos vacios, simplemente se muestra un mensaje de error xd
        alert("Por favor, completa todos los campos.");
    }
});
