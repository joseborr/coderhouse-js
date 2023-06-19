function renderProductos() {
  let productos = cargarProductos();
  var render = productos.map(
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
                    <a href="#" class="col-3"onclick=agregarFavorito(event,${producto.id},"productos") id="fav${producto.id}">${producto.favorito ?'<i class="fa-solid fa-heart"></i>' :'<i class="fa-regular fa-heart">' }</i></a>
                    <a href="#"onclick=verProducto(${producto.id}) class="btn btn-primary col-6">Ver detalle</a>
                    <a href="#" class="col-3 d-flex justify-content-end align-items-center" onclick=agregarAlCarrito(event,${producto.id})><i class="fa-solid fa-cart-plus "></i></a>
                    </div>
                </div>
            </div>
        </div>`
  ).join("");
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = render;
}
renderBotonCarrito();
renderProductos();
