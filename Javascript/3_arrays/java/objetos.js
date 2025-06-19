const prod1 = {
    nombre: 'sarten',
    precio: 12,
    stock: 1200
}

const prod2 = {
    nombre: 'boli verde',
    precio: 4.50,
    stock: 8
}

// recuperar los valores

console.log(prod1['precio']);
console.log(prod1.stock);

prod1.precio = 35; // mejor esta opcion para modificar
prod1['stock'] = 300; // es vlida pero es peor que la anterior

// for - in  //para recorrer un objeto

for(let clave in prod1){
    console,log(clave, prod1[clave]);
}

//

const productos = [prod1, prod2];
console.log(productos[1].nombre);

// Mostrar el nombre y el precio de todos los productos
for(let producto of productos){
    console.log(`Nombre: ${producto.nombre}. Precio: ${producto.precio}`)
}

