const PRODUCTOS = [
  {
    id: "evil-within",
    codigo: "JG-001",
    nombre: "The Evil Within",
    precio: 14990,
    categoria: "Terror",
    stock: 18,
    stockCritico: 5,
    imagen: "images/juego-evil-within.jpg",
    descripcion: "Terror de supervivencia en tercera persona, del creador de Resident Evil."
  },
  {
    id: "ghost-tsushima",
    codigo: "JG-002",
    nombre: "Ghost of Tsushima",
    precio: 39990,
    categoria: "Acción",
    stock: 12,
    stockCritico: 4,
    imagen: "images/juego-ghost-tsushima.jpg",
    descripcion: "Acción y mundo abierto ambientado en el Japón feudal."
  },
  {
    id: "forza-horizon",
    codigo: "JG-003",
    nombre: "Forza Horizon",
    precio: 44990,
    categoria: "Carreras",
    stock: 25,
    stockCritico: 5,
    imagen: "images/juego-forza-horizon.jpg",
    descripcion: "Carreras de mundo abierto con los autos más icónicos."
  },
  {
    id: "minecraft-legends",
    codigo: "JG-004",
    nombre: "Minecraft Legends",
    precio: 29990,
    categoria: "Estrategia",
    stock: 20,
    stockCritico: 5,
    imagen: "images/juego-minecraft-legends.jpg",
    descripcion: "Estrategia y acción para defender el mundo de Minecraft."
  },
  {
    id: "hollow-knight",
    codigo: "JG-005",
    nombre: "Hollow Knight",
    precio: 9990,
    categoria: "Aventura",
    stock: 30,
    stockCritico: 8,
    imagen: "images/juego-hollow-knight.jpg",
    descripcion: "Aventura metroidvania en un reino de insectos caído."
  }
];

function buscarProducto(id) {
  return PRODUCTOS.find(function (p) { return p.id === id; });
}

function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL");
}