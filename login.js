document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // aca ssimplemente se obtienen los datos
    const nombreLogin = document.getElementById("nombreLogin").value.trim();
    const contraseñaLogin = document.getElementById("contraseñaLogin").value.trim();

    // recuperar la lista de usuarios de localStorage, el parse es para devolver usuarios a su estado original, osea, un objeto :v
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // aca se busca si el usuario existe en la lista, si no está, simplemente prosigue
    const usuario = usuarios.find(user => user.nombre === nombreLogin && user.contraseña === contraseñaLogin);

    // de nuevo lo mismo, si usuario es true se ejecuta, y si no, pues no :v
    if (usuario) {
        alert("Bienvenido, " + usuario.nombre);
        window.location.href = ".juegos/ppt.html";
    } else {
        alert("Nombre o contraseña incorrectos. Por favor, crea una cuenta.");
    }
});
