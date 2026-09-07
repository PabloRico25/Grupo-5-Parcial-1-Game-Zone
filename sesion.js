function obtenerSesion() {
  const datos = localStorage.getItem("gz_sesion");
  return datos ? JSON.parse(datos) : null;
}

function cerrarSesion() {
  localStorage.removeItem("gz_sesion");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const sesion = obtenerSesion();
  const linkIngreso = document.getElementById("nav-ingreso");
  if (!linkIngreso || !sesion) {
    return;
  }

  linkIngreso.textContent = "Cerrar sesión (" + sesion.nombre + ")";
  linkIngreso.setAttribute("href", "#");
  linkIngreso.addEventListener("click", function (event) {
    event.preventDefault();
    cerrarSesion();
  });

  if (sesion.rol === "Administrador" || sesion.rol === "Vendedor") {
    const linkAdmin = document.createElement("a");
    linkAdmin.href = "admin-home.html";
    linkAdmin.textContent = "Panel Admin";
    linkIngreso.parentElement.insertBefore(linkAdmin, linkIngreso);
  }
});