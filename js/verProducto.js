function renderProducto(){
    let producto = JSON.parse(localStorage.getItem('producto'));
    var render = `
    <div class="card mb-3" style="max-width: 600px;">
        <div class="row g-0">
            <div class="col-md-6">
                <img src="${producto.imagen}" class="w-100" alt="${producto.nombre}">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">${producto.marca}</h5>
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text"><small class="text-body-secondary">${producto.descripcion}</small></p>
                    <div class="row m-2">
                    <a href="#" class="col-3 "onclick=agregarFavorito(event,${producto.id},null) id="fa${producto.id}">${producto.favorito ?'<i class="fa-solid fa-heart"></i>' :'<i class="fa-regular fa-heart">' }</i></a>
                    <a href="../index.html" class="btn btn-primary col-6">Volver</a>
                    <a href="#" class="col-3 d-flex justify-content-end align-items-center" onclick=agregarAlCarrito(event,${producto.id})><i class="fa-solid fa-cart-plus "></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
                `
    const contenidoProducto = document.getElementById('contenidoProducto');
    contenidoProducto.innerHTML = render;

}
renderBotonCarrito();
renderProducto();