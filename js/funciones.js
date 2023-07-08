function guardarProductos(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}
function cargarProductos() {
  return JSON.parse(localStorage.getItem("productos"));
}
const buscarProducto = (id) => {
  const productos = cargarProductos();
  return productos.find((producto) => producto.id === id);
};

const indiceDelProducto = (producto) => {
  const productos = cargarProductos();
  return productos.findIndex((prod) => prod.id == producto.id);
};

const verProducto = (id) => {
  const producto = buscarProducto(id);
  localStorage.setItem("producto", JSON.stringify(producto));
  location.href = "./pages/verProducto.html";
};

const agregarFavorito = (event, id, llamador) => {
  event.preventDefault();
  let productos = cargarProductos();
  const producto = buscarProducto(id);
  const i = indiceDelProducto(producto);
  productos[i].favorito = !productos[i].favorito;
  guardarProductos(productos);
  localStorage.setItem("producto", JSON.stringify(productos[i]));
  llamador !== "productos" ? renderProducto() : renderProductos();
};

const agregarFavoritoFavoritos = (event, id, llamador) => {
  event.preventDefault();
  let productos = cargarProductos();
  const producto = buscarProducto(id);
  const i = indiceDelProducto(producto);
  productos[i].favorito = !productos[i].favorito;
  guardarProductos(productos);
  localStorage.setItem("producto", JSON.stringify(productos[i]));
  renderFavoritos();
};

const agregarTodosFavoritos = (event, productosFavoritos) => {
  event.preventDefault();
  Swal.fire({
    title:
      "¿Quiere agregar todos los productos marcados como favoritos al carrito?",
    showCancelButton: true,
    confirmButtonText: "Agregar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const carrito = cargarCarrito();
      productosFavoritos.forEach((productoFavorito) => {
        let producto = buscarProducto(productoFavorito.id);
        carrito.push(producto);
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Swal.fire("Productos agregados correctamente", "", "success");
      renderBotonCarrito();
      location.href = "./carrito.html";
    }
  });
}

const cargarCarrito = () => JSON.parse(localStorage.getItem("carrito")) || [];

const agregarAlCarrito = (event, id) => {
  event.preventDefault();
  let producto = buscarProducto(id);
  const carrito = cargarCarrito();
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderBotonCarrito();
  Swal.fire({
    icon: "success",
    title: `Se agregó ${producto.nombre} al carrito`,
    showConfirmButton: false,
    timer: 1700,
  });
};
const agregarUnoAlCarrito = (event, id) => {
  event.preventDefault();
  let producto = buscarProducto(id);
  const carrito = cargarCarrito();
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
  renderBotonCarrito();
};

const totalProductos = () => {
  const carrito = cargarCarrito();
  return carrito.length;
};

const renderBotonCarrito = () => {
  let carrito = document.getElementById("botonCarrito");
  carrito.innerHTML = `
    <button type="button" class="btn btn-light position-relative me-5">
    <i class="fa-solid fa-cart-shopping"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      ${totalProductos()}
    <span class="visually-hidden">unread messages</span>
    </span>
    </button>`;
};

const cantidadProducto = (id) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito.reduce((contador, elem) => {
    if (elem.id === id) {
      contador++;
    }
    return contador;
  }, 0);
};
const obtenerProductosUnicos = (carrito) => {
  return carrito.filter((producto, index, productos) => {
    return productos.findIndex((p) => p.id === producto.id) === index;
  });
};

const quitarUnoDelCarrito = (event, id) => {
  event.preventDefault();
  const carrito = cargarCarrito();
  const indice = carrito.findIndex((producto) => producto.id === id);
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
  renderBotonCarrito();
};

const quitarTodosDelCarrito = (event, id) => {
  event.preventDefault();
  Swal.fire({
    title: "¿Quiere eliminar todos los productos de este tipo del carrito?",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "No, deseo mantener los productos",
  }).then((result) => {
    if (result.isConfirmed) {
      let carrito = cargarCarrito();
      carrito = carrito.filter((producto) => producto.id !== id);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Swal.fire("Productos quitados correctamente", "", "success");
      renderCarrito();
      renderBotonCarrito();
    }
  });
};

const calcularTotal = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );
};

const vaciarCarrito = () => {
  Swal.fire({
    title: "¿Quiere eliminar todos los productos del carrito?",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "No, deseo mantener los productos",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("carrito", JSON.stringify([]));
      renderBotonCarrito();
      Swal.fire("Productos quitados correctamente", "", "success");
      renderCarrito();
    }
  });
  
};
