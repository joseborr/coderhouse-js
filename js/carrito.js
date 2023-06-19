function renderCarrito() {
    const carrito = cargarCarrito();
    var render = "";
    if (totalProductos() > 0) {
      render = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Nombre del producto</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Monto</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>`;

      const productosUnicos = obtenerProductosUnicos(carrito);

      render += productosUnicos.reduce((html, item, index) => {
        const cantidad = cantidadProducto(item.id);

        return (
          html +
          `
            <tr>
            <th scope="row">${index + 1}</th>
            <td><img src="${item.imagen}" style="max-height:40px"></td>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>${cantidad}</td>
            <td>$${cantidad * item.precio}</td>
            <td>
            <a href="#" onclick="agregarUnoAlCarrito(event, ${
              item.id
            })"><i class="fa-solid fa-arrow-up"></i></a>
            <a href="#" onclick="quitarUnoDelCarrito(event, ${
              item.id
            })"><i class="fa-solid fa-arrow-down"></i></a>
            <a href="#" onclick="quitarTodosDelCarrito(event, ${
              item.id
            })"><i class="fa-solid fa-x"></i></a>
            </td>
            </tr>`
        );
      }, "");

      render += `<tr>
        <th scope="row">&nbsp;</th>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>Total: </td>
        <td>&nbsp;</td>
        <td>$${calcularTotal()}</td>
        <td>&nbsp;</td>
    </tr></tbody></table>`;
    } else {
      render += `<div class="alert alert-danger text-center" role="alert">
                    Aún no se han agregado productos al carrito
                    </div>`;
    }
    const tabla = document.getElementById("tablaCarrito");
    tabla.innerHTML = render;
  }
  renderBotonCarrito();
  renderCarrito();