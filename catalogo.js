document.querySelectorAll(".juego-card").forEach(function (tarjeta) {
  const boton = tarjeta.querySelector(".btn-carrito");
  if (!boton) {
    return;
  }

  boton.addEventListener("click", function () {
    agregarAlCarrito(tarjeta.id, 1);

    const textoOriginal = boton.textContent;
    boton.textContent = "Agregado ✓";
    setTimeout(function () {
      boton.textContent = textoOriginal;
    }, 1200);
  });
});