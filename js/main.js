/////////////////////////////////////////////Clases///////////////////////////////////////////////
class Articulo {
  constructor(nombre, precio, descripcion) {
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
    this.descripcion = descripcion;
    this.enPromocion = false;
    this.descuento = 0.0;
  }

  asignarDescuento(descuento) {
    this.enPromocion = true;
    this.descuento = descuento;
  }

  aplicarDescuento() {
    this.precio -= (this.precio * this.descuento) / 100;
    this.precio = Math.round(this.precio);
  }
}

class Compra {
  constructor() {
    this.articulos = [];
    this.total = 0.0;
    this.totalDescuentos = 0.0;
    this.subtotal = 0.0;
  }

  comprar(articulo) {
    this.articulos.push(articulo);
    return articulo;
  }

  sortearDescuento() {
    //sortea un descuento del 20% entre los articulos comprados
    let indice = Math.floor(Math.random() * this.articulos.length);
    alert(
      "Te ganaste un descuento de un 20% en el articulo " +
        this.articulos[indice].nombre +
        "!"
    );
    this.articulos[indice].asignarDescuento(20);
  }
  aplicarIva() {
    this.total = this.subtotal * 1.21;
  }

  imprimirTicket() {
    let ticket = "TICKET \n";
    ticket += new Date() + "\n";
    for (const articulo of this.articulos) {
      ticket += articulo.nombre + "....$" + articulo.precio + "\n";
    }
    ticket += "\n \nSub-total (sin IVA): $" + this.subtotal + "\n";
    ticket +=
      "Total Descuentos: $" + this.totalDescuentos + "\nTotal: $" + this.total;
    return ticket;
  }

  sumarDescuentos(articulo, compra) {
    compra.totalDescuentos += (articulo.descuento / 100) * articulo.precio;
  }

  sumarSubtotal(articulo, compra) {
    compra.subtotal += articulo.precio;
  }

  porCadaUno(arreglo, funcion) {
    let compra = this;
    for (const elemento of arreglo) {
      funcion(elemento, compra);
    }
  }
  finalizarCompra() {
    this.sortearDescuento();
    let conDescuento = this.articulos.filter((art) => art.enPromocion);
    this.porCadaUno(conDescuento, this.sumarDescuentos); //suma todos los descuentos
    this.porCadaUno(this.articulos, this.sumarSubtotal); //suma todos los precios sin descuento ni iva
    this.aplicarIva(); //IVA sobre el total

    this.total -= this.totalDescuentos; //total con iva - descuentos
  }
}

class Cliente {
  constructor(nombre, genero) {
    this.nombre = nombre.toUpperCase();
    this.genero = genero.toUpperCase();
    this.fechaIngreso = new Date();
    this.compra = new Compra();
  }

  saludar() {
    let letra = "";
    if (this.genero == "H" || this.genero === "HOMBRE") {
      letra = "o";
    } else if (this.genero == "M" || this.genero === "MUJER") {
      letra = "a";
    } else {
      letra = "x";
    }
    return "Bienvenid" + letra + " " + this.nombre + "!";
  }
}
class Deposito {
  constructor() {
    this.productos = [
      {
        precio: 450,
        nombre: "Balde de playa",
        descripcion: "Baldecito de playa con palita incluida",
      },
      {
        precio: 500,
        nombre: "Piso de goma",
        descripcion: "Piso de goma eva encastrable x 4 piezas",
      },
      {
        precio: 550,
        nombre: "Mordillo",
        descripcion:
          "Mordillo relleno de agua, para poner en la heladera. Ideal para época de dentición",
      },
      {
        precio: 600,
        nombre: "Peluche",
        descripcion: "Oso de peluche blanco. 100% poliester",
      },
      {
        precio: 650,
        nombre: "Ladrillos encastrables",
        descripcion: "Clásico juego de ladrillos encastrables tipo 'Rastri'",
      },
    ];
  }

  buscarProducto(indice) {
    indice -= 1;
    if (indice < this.productos.length && indice >= 0) {
      return this.productos[indice];
    } else {
      return null;
    }
  }
}

////////////////////////////////////////Simulador/////////////////////////////////////////
const opciones =
  "Opciones : \n" +
  "1. Balde de playa con palita y rastrillo \n" +
  "2. Piso de goma eva para encastrar \n" +
  "3. Mordillo de silicona \n" +
  "4. Peluche \n" +
  "5. Ladrillos encastrables \n" +
  '\n \n Elegí un número o escribí "fin" para terminar:';
const eligeArticulo = (eleccion) => {
  let deposito = new Deposito();
  let producto = deposito.buscarProducto(eleccion);
  if (producto !== null) {
    articulo = new Articulo(
      producto.nombre,
      producto.precio,
      producto.descripcion
    );
    return articulo;
  } else if (eleccion.toUpperCase() === "FIN") {
    alert("Terminaste de elegir!");
    return null;
  } else {
    alert("La opción ingresada no es válida!");
    return null;
  }
};
const comprar = (cliente) => {
  let eleccion = prompt(opciones);
  while (eleccion.toUpperCase() !== "FIN") {
    let articulo = eligeArticulo(eleccion);
    if (articulo !== null) {
      cliente.compra.comprar(articulo);
      alert("Se incluyó " + articulo.nombre + " en el carrito de compras");
    }
    eleccion = prompt(opciones);
  }
};
let nombre = prompt("Ingresa tu nombre");
let genero = prompt(
  'Ingresa tu género ("H: hombre, M: mujer, o presiona otra letra si no te identificas con los anteriores")'
);
let cliente = new Cliente(nombre, genero);
alert(cliente.saludar());
let opcion = "si";
while (opcion.toUpperCase() != "NO") {
  comprar(cliente);
  cliente.compra.finalizarCompra();
  alert(cliente.compra.imprimirTicket());
  opcion = prompt("Querés hacer otra compra?");
}
alert("Gracias por visitarnos!");
