const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");
const producto = buscarProducto(idProducto);
const contenedor = document.getElementById("detalle-producto");

if (!producto) {
  contenedor.innerHTML = "<h2>Producto no encontrado</h2><p>Vuelve al <a href=\"catalogo.html\">catálogo</a>.</p>";
} else {
  document.title = "GameZone - " + producto.nombre;

  contenedor.innerHTML =
    '<div class="detalle-layout">' +
      '<img src="' + producto.imagen + '" alt="Portada de ' + producto.nombre + '">' +
      "<div>" +
        "<h2>" + producto.nombre + "</h2>" +
        '<p class="precio">' + formatearPrecio(producto.precio) + "</p>" +
        "<p>" + producto.descripcion + "</p>" +
        '<label for="cantidad">Cantidad</label>' +
        '<input type="number" id="cantidad" value="1" min="1" max="' + producto.stock + '">' +
        '<button class="btn-carrito" type="button" id="btn-agregar">Agregar al carrito</button>' +
        '<p class="error" id="detalle-mensaje"></p>' +
      "</div>" +
    "</div>";

  document.getElementById("btn-agregar").addEventListener("click", function () {
    const cantidadInput = document.getElementById("cantidad");
    const cantidad = parseInt(cantidadInput.value, 10) || 1;

    agregarAlCarrito(producto.id, cantidad);

    const mensaje = document.getElementById("detalle-mensaje");
    mensaje.style.color = "#4dff88";
    mensaje.textContent = "¡Agregado al carrito!";
  });

  const relacionadosDiv = document.getElementById("relacionados");
  PRODUCTOS.filter(function (p) { return p.id !== producto.id; }).forEach(function (p) {
    const articulo = document.createElement("article");
    articulo.className = "juego-card";
    articulo.innerHTML =
      '<img src="' + p.imagen + '" alt="Portada de ' + p.nombre + '">' +
      "<h3>" + p.nombre + "</h3>" +
      '<p class="precio">' + formatearPrecio(p.precio) + "</p>" +
      '<a href="detalle-producto.html?id=' + p.id + '">Ver detalle</a>';
    relacionadosDiv.appendChild(articulo);
  });
}