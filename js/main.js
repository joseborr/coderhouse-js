let opciones =
"Opciones : \n" +
"1. Balde de playa con palita y rastrillo \n" +
"2. Piso de goma eva para encastrar \n" +
"3. Mordillo de silicona \n" +
"4. Peluche \n" +
"5. Ladrillos encastrables \n" +
'\n \n Elegí un número o escribí "fin" para terminar:';

const eligeProducto = (eleccion) => {
    let precio;
    let producto = "";
    switch (eleccion) {
    case "1":
        precio = 450;
        producto = "Balde de playa";
        break;
    case "2":
        precio = 500;
        producto = "Piso de goma";
        break;
    case "3":
        precio = 550;
        producto = "Mordillo";
        xxbreak;
    case "4":
        precio = 600;
        producto = "Peluche";
        break;
    case "5":
        precio = 650;
        producto = "Ladrillos encastrables";
        break;
    case "fin":
        producto = "fin";
    default:
        precio = 0;
        break;
    }
    if (producto === "") {
        alert("La opción ingresada no es válida");
    } else if (producto === "fin") {
        alert("Terminaste de elegir");
    } else {
        alert("Elegiste " + producto + " que vale $" + precio);
    }
    return precio;
};
const sumaIVA = (precio) => {
    return precio * 1.21;
};
const promedio = (cantidad, total) => {
    return total / cantidad;
}
const verResultados = (cantidad, total) => {
    alert("Elegiste un total de " + cantidad + " productos por un total de $" + total 
    + " sin impuestos");
    total = sumaIVA(total).toFixed(2);
    alert(
        "Tu total con IVA es de $" + total + "\n" +
        "Tu gasto promedio por producto es de $" + promedio(cantidad, total).toFixed(2)
        );
    };
const comprar = () => {
    let total = 0;
    let cantidad = 0;
    let eleccion = prompt(opciones);
    while (eleccion.toUpperCase() != "FIN") {
        total += eligeProducto(eleccion);
        cantidad++;
        eleccion = prompt(opciones);
    }
    verResultados(cantidad,total);
};
let genero = prompt("Elegí tu genero");
let letra;
if (genero.toUpperCase() === "HOMBRE") {
    letra = "o";
} else if (genero.toUpperCase() === "MUJER") {
    letra = "a";
} else {
    letra = "x";
}
alert("Bienvenid" + letra + " a nuestra tienda virtual! \n Vamos a elegir algunos productos!");
let opcion = 'si';
while(opcion.toUpperCase() != 'NO'){
    comprar();
    opcion = prompt('Querés hacer otra compra?');
}
alert('Gracias por visitarnos!');


