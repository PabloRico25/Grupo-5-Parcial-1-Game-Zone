const form = document.getElementById("form-registro");

const correosRegistrados = ["jugador@duoc.cl"];

const selectRegion = document.getElementById("region");
const selectComuna = document.getElementById("comuna");

llenarRegiones(selectRegion);

selectRegion.addEventListener("change", function () {
  llenarComunas(selectRegion, selectComuna);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const contrasena = document.getElementById("contrasena");
  const confirmar = document.getElementById("confirmar");
  const telefono = document.getElementById("telefono");
  const generos = document.querySelectorAll('input[name="genero"]:checked');

  const errorNombre = document.getElementById("error-nombre");
  const errorCorreo = document.getElementById("error-correo");
  const errorContrasena = document.getElementById("error-contrasena");
  const errorConfirmar = document.getElementById("error-confirmar");
  const errorTelefono = document.getElementById("error-telefono");
  const errorRegion = document.getElementById("error-region");
  const errorComuna = document.getElementById("error-comuna");
  const errorGenero = document.getElementById("error-genero");
  const exito = document.getElementById("form-exito");


  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorContrasena.textContent = "";
  errorConfirmar.textContent = "";
  errorTelefono.textContent = "";
  errorRegion.textContent = "";
  errorComuna.textContent = "";
  errorGenero.textContent = "";
  exito.textContent = "";

  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (nombre.value.trim() === "") {
    errorNombre.textContent = "Debe ingresar su nombre completo";
    esValido = false;
  } else if (!nombreRegex.test(nombre.value.trim())) {
    errorNombre.textContent = "El nombre solo puede tener letras y espacios";
    esValido = false;
  } else if (nombre.value.trim().length > 100) {
    errorNombre.textContent = "Máximo 100 caracteres";
    esValido = false;
  }

  const correoRegex = /^[^\s@]+@duoc\.cl$/;
  const correoValor = correo.value.trim().toLowerCase();
  if (correoValor === "") {
    errorCorreo.textContent = "Este campo es obligatorio";
    esValido = false;
  } else if (!correoRegex.test(correoValor)) {
    errorCorreo.textContent = "Debe ser un correo @duoc.cl válido";
    esValido = false;
  } else if (correoValor.length > 60) {
    errorCorreo.textContent = "Máximo 60 caracteres";
    esValido = false;
  } else if (correosRegistrados.includes(correoValor)) {
    errorCorreo.textContent = "Ese correo ya está registrado";
    esValido = false;
  }

  const contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;
  if (contrasena.value === "") {
    errorContrasena.textContent = "Debe ingresar una contraseña";
    esValido = false;
  } else if (!contrasenaRegex.test(contrasena.value)) {
    errorContrasena.textContent = "Debe tener 10+ caracteres, con mayúscula, minúscula, número y símbolo";
    esValido = false;
  }

  if (confirmar.value === "") {
    errorConfirmar.textContent = "Debe confirmar la contraseña";
    esValido = false;
  } else if (confirmar.value !== contrasena.value) {
    errorConfirmar.textContent = "Las contraseñas no coinciden";
    esValido = false;
  }

  const telefonoRegex = /^[+]?[\d\s]{8,15}$/;
  if (telefono.value.trim() !== "" && !telefonoRegex.test(telefono.value.trim())) {
    errorTelefono.textContent = "Ingresa un teléfono válido o deja el campo vacío";
    esValido = false;
  }

  if (selectRegion.value === "") {
    errorRegion.textContent = "Selecciona tu región";
    esValido = false;
  }

  if (selectComuna.value === "") {
    errorComuna.textContent = "Selecciona tu comuna";
    esValido = false;
  }

  if (generos.length === 0) {
    errorGenero.textContent = "Selecciona al menos un género favorito";
    esValido = false;
  }

  if (esValido) {
    correosRegistrados.push(correoValor);
    exito.style.color = "#4dff88";
    exito.textContent = "¡Cuenta creada correctamente!";
    form.reset();
  }
});