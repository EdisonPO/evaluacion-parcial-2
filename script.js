
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

function clasificarEdad(edad){
    if(edad < 18){
        console.log(`Con ${edad} años es: Menor de edad`);
    }else if (edad <= 65){
        console.log(`Con ${edad} años es: Adulto`);
    }else {
        console.log(`Con ${edad} años es: Adulto mayor`);
    }

}
clasificarEdad(16);
clasificarEdad(31);
clasificarEdad(72);

let sumaTotal = 0;

for(let i = 1; i <=20; i++){
    sumaTotal += i;
    if(i % 2 === 0){
        console.log(`${i} es par`)
    }else {
        console.log(`${i} es impar`)
    }
}
console.log(`La suma total de los numeros de 1 al 20 es: ${sumaTotal}`);

function obtenerMayor(num1,num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

let mayor = obtenerMayor(46,80);
console.log(`El numero mayor entre 46 y 80 es: ${mayor}`);