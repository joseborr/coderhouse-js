const productosListado = [
  {
    id: 1,
    favorito: false,
    descripcion:"El clásico juego de cartas UNO",
    nombre: "UNO",
    marca: "Ruibal",
    categoria: "Juegos de mesa",
    precio: 2890.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/156176-170-170?v=1773404587&width=170&height=170&aspect=true",
  },
  {
    id: 2,
    favorito: false,
    descripcion:"Clásico juego de tablero, si te queda uno solo, ganás!",
    nombre: "UNO SOLO",
    marca: "Ruibal",
    categoria: "Juegos de mesa",
    precio: 1110.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/156150-170-170?v=1773403721&width=170&height=170&aspect=true",
  },
  {
    id: 3,
    favorito: false,
    descripcion:"Clásico juego de dominó en su edición Cristal",
    nombre: "DOMINO CRISTAL",
    marca: "Ruibal",
    categoria: "Juegos de mesa",
    precio: 1990.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/206889-170-170?v=1773402882&width=170&height=170&aspect=true",
  },
  {
    id: 4,
    favorito: false,
    descripcion:"Burbujero en forma de pistola, al apretar el gatillo salen burbujas",
    nombre: "BURBUJERO PISTOLA",
    marca: "Sebigus",
    categoria: "Juegos de aire libre",
    precio: 763.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/267053-170-170?v=638060392062030000&width=170&height=170&aspect=true",
  },
  {
    id: 5,
    favorito: false,
    descripcion:"Burbujero en forma de saxofón",
    nombre: "BURBUJERO SAXOFON",
    marca: "Sebigus",
    categoria: "Juegos de aire libre",
    precio: 699.3,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/266969-170-170?v=1773423950&width=170&height=170&aspect=true",
  },
  {
    id: 6,
    favorito: false,
    descripcion:"Oso de peluche, 100% poliester",
    nombre: "PELUCHE DE OSO CON MOÑO 65 cm",
    marca: "Genérico",
    categoria: "Peluches",
    precio: 5990.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/321634-170-170?v=1773406482&width=170&height=170&aspect=true",
  },
  {
    nombre: "PELUCHE DE DINOSAURIO 26 cm",
    favorito: false,
    descripcion:"Peluche en forma de dinosaurio, 100% poliester",
    marca: "Genérico",
    categoria: "Peluches",
    precio: 3990.0,
    imagen:
      "https://carrefourar.vtexassets.com/arquivos/ids/331805-170-170?v=638210685214670000&width=170&height=170&aspect=true",
  },
];

function cargarProductos(){
    return JSON.parse(localStorage.getItem("productos"));
}
function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

guardarProductos(productosListado);


