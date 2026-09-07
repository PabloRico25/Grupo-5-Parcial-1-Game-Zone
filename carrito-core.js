const CARRITO_KEY = "gz_carrito";

function obtenerCarrito() {
  const datos = localStorage.getItem(CARRITO_KEY);
  return datos ? JSON.parse(datos) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function agregarAlCarrito(idProducto, cantidad) {
  const carrito = obtenerCarrito();
  const item = carrito.find(function (i) { return i.id === idProducto; });

  if (item) {
    item.cantidad += cantidad;
  } else {
    carrito.push({ id: idProducto, cantidad: cantidad });
  }

  guardarCarrito(carrito);
}

function quitarDelCarrito(idProducto) {
  const carrito = obtenerCarrito().filter(function (i) { return i.id !== idProducto; });
  guardarCarrito(carrito);
}

function cambiarCantidad(idProducto, nuevaCantidad) {
  if (nuevaCantidad < 1) {
    quitarDelCarrito(idProducto);
    return;
  }

  const carrito = obtenerCarrito();
  const item = carrito.find(function (i) { return i.id === idProducto; });
  if (item) {
    item.cantidad = nuevaCantidad;
  }
  guardarCarrito(carrito);
}

function contarItemsCarrito() {
  return obtenerCarrito().reduce(function (total, i) { return total + i.cantidad; }, 0);
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("carrito-contador");
  if (contador) {
    contador.textContent = contarItemsCarrito();
  }
}

document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);