
let nombreProducto1 = "Celular Nokia";
let precioProducto1 = 350;
let disponibleProducto1 = true;

let nombreProducto2 = "Mouse inalambrico";
let precioProducto2 = 20 ;
let disponibleProducto2 = false;

console.log(`Producto: ${nombreProducto1}, Precio: ${precioProducto1}, Disponible: ${disponibleProducto1}`)
console.log(`Producto: ${nombreProducto2}, Precio: ${precioProducto2}, Disponible: ${disponibleProducto2}`);

let precioOriginal = precioProducto1;
let descuento = 0.15;

let ahorro = precioOriginal * descuento;
let precioFinal = precioOriginal - ahorro;

console.log(`Precio original: ${precioOriginal}`);
console.log(`Ahorro (15%): ${ahorro}`);
console.log(`Precio final con descuento: ${precioFinal}`);