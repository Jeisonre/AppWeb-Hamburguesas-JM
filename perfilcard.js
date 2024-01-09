function ingresarDatos() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("cedulaUsuario", cedula);

    alert("Datos ingresados correctamente.");
}

function mostrarDatos() {
    var nombreUsuario = localStorage.getItem("nombreUsuario");
    var cedulaUsuario = localStorage.getItem("cedulaUsuario");

    document.getElementById("nombre-usuario").textContent = nombreUsuario || "Nombre del Usuario";
    document.getElementById("cedula-usuario").textContent = "Cédula: " + (cedulaUsuario || "Cédula del Usuario");
}