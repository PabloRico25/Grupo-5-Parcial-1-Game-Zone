const USUARIOS_SEED = [
  { correo: "admin@duoc.cl", contrasena: "Admin1234!", rol: "Administrador", nombre: "Admin GameZone" },
  { correo: "vendedor@duoc.cl", contrasena: "Vendedor10!", rol: "Vendedor", nombre: "Vendedor Demo" },
  { correo: "jugador@duoc.cl", contrasena: "Jugador10!", rol: "Cliente", nombre: "Jugador Demo" }
];

function obtenerUsuarios() {
  return USUARIOS_SEED;
}

function buscarUsuarioPorCorreo(correo) {
  return USUARIOS_SEED.find(function (u) { return u.correo === correo.toLowerCase(); });
}