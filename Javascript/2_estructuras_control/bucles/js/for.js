/**
 * Lo utilizamos cuando estamos 100% seguros de cuántas iteraciones vamos a hacer
 * 
 * Sintáxis:
 * 
 * for( Inicialización índice; CONDICION; MODIFICACIÓN índice) {
 *      Sentencias a repetir
 * }
 */

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// números del 10 al 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Números pares del 1 al 100 (condicionales)
for (let i = 1; i <= 100; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Números pares del 1 al 100 (SIN condicionales)
for(let i = 2; i <= 100; i += 2){
    console.log(i);
}