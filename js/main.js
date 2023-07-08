const renderProductos = (productos) => {
if (!productos){
  productos = cargarProductos(); // luego del primer fetch los productos van a estar en el local storage y no se pasan por parametro
}
  
  let render = productos.map(
    (producto) =>
      ` <div class="col-lg-3 col-md-4 col-sm-12 m-4">
            <div class="card h-100" style="width: 18rem;">
                <h5 class="card-title text-center m-3">${producto.nombre}</h5>
                <div class="d-flex justify-content-center ">
                    <img src="${producto.imagen}" class="img-fluid w-75" alt="${producto.nombre}">
                </div>
                <div class="card-body">
                <p class="card-text text-center"><b>$${producto.precio}</b></p>
                    <div class="row m-2">
                    <a href="#" class="col-2"onclick=agregarFavorito(event,${producto.id},"productos") id="fav${producto.id}">${producto.favorito ?'<i class="fa-solid fa-heart">' :'<i class="fa-regular fa-heart">' }</i></a>
                    <a href="#" class="btn btn-primary col-6 col-6 mx-2 d-flex justify-content-end align-items-center" onclick=agregarAlCarrito(event,${producto.id})>Agregar  <i class="fa-solid fa-cart-plus ms-2 "></i></a>
                    <a href="#"onclick=verProducto(${producto.id}) class="btn btn-primary col-3">Ver</a>
                    </div>
                </div>
            </div>
        </div>`
  ).join("");
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = render;
}
const render = async () => {
  const spinner = document.getElementById("spinner");
  if(spinner){
    spinner.style.display = "block";
  }
  const respuesta = await fetch("js/productos.json");
  let productos = await respuesta.json();
  guardarProductos(productos);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // agrego esto para simular la demora de la promesa
  renderBotonCarrito();
  if(spinner){
    spinner.style.display = "none";
  }
  renderProductos(productos)?.catch((error) => console.error(error));
  
};

render();
const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", () => {
  const inputBuscar = document.getElementById("inputBuscar");
  const textoBusqueda = inputBuscar.value.trim().toLowerCase();

  if (textoBusqueda !== "") {
    const productos = cargarProductos();
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(textoBusqueda)
    );

    renderProductos(productosFiltrados);
  } else {
    renderProductos();
  }
});
