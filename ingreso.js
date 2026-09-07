const form = document.getElementById("form-ingreso");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");

  const errorCorreo = document.getElementById("error-correo");
  const errorContrasena = document.getElementById("error-contrasena");
  const exito = document.getElementById("form-exito");

  errorCorreo.textContent = "";
  errorContrasena.textContent = "";
  exito.textContent = "";

  const correoRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
  const correoValor = correo.value.trim().toLowerCase();

  if (correoValor === "") {
    errorCorreo.textContent = "Este campo es obligatorio";
    esValido = false;
  } else if (!correoRegex.test(correoValor)) {
    errorCorreo.textContent = "Debe ser un correo @duoc.cl, @profesor.duoc.cl o @gmail.com";
    esValido = false;
  } else if (correoValor.length > 100) {
    errorCorreo.textContent = "Máximo 100 caracteres";
    esValido = false;
  }

  if (contrasena.value === "") {
    errorContrasena.textContent = "Debe ingresar su contraseña";
    esValido = false;
  }

  if (!esValido) {
    return;
  }

  const usuario = buscarUsuarioPorCorreo(correoValor);

  if (!usuario || usuario.contrasena !== contrasena.value) {
    errorContrasena.textContent = "Correo o contraseña incorrectos";
    return;
  }

  localStorage.setItem("gz_sesion", JSON.stringify({
    correo: usuario.correo,
    nombre: usuario.nombre,
    rol: usuario.rol
  }));

  exito.style.color = "#4dff88";
  exito.textContent = "¡Sesión iniciada correctamente! Redirigiendo...";
  form.reset();

  setTimeout(function () {
    if (usuario.rol === "Administrador" || usuario.rol === "Vendedor") {
      window.location.href = "admin-home.html";
    } else {
      window.location.href = "index.html";
    }
  }, 800);
});