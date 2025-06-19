/**
 * CALCULAR EL IMPORTE DE UNA FACTURA
 * -VAMOS A RECIBIR EL PRECIO, EL PORCENTAJE DE IVA Y EL CLIENTE AL QUE VA DESTINADA LA FACTURA
 * -PINTAR EN EL HTML EL RESULTADO DEL CALCULO
 */

/**
 * Calcula el porcentaje de un precio dado.
 *
 * @param {number} precio - El valor base sobre el que se va a calcular el porcentaje.
 * @param {number} porcentaje - El porcentaje que se desea calcular.
 * @returns {number} El resultado del porcentaje aplicado al precio.
 *
 * @example
 * calcularPorcentaje(200, 15); // Devuelve 30
 */

function calcularPorcentaje (precio, porcentaje){
    return (precio*porcentaje) / 100;
}

/**
 * Suma dos números.
 *
 * @param {number} numA - El primer número a sumar.
 * @param {number} numB - El segundo número a sumar.
 * @returns {number} La suma de los dos números.
 *
 * @example
 * sumar(3, 7); // Devuelve 10
 */

function sumar(numA, numB) {
    return numA + numB;
}

/**
 * Muestra en el documento HTML una sección con los datos de una factura.
 *
 * @param {number} precio - El precio total del producto o servicio antes de impuestos.
 * @param {number} iva - El porcentaje de IVA aplicado.
 * @param {string} cliente - El nombre del cliente al que se emite la factura.
 * @returns {void}
 *
 * @example
 * pintarHtml(100, 21, 'Juan Pérez');
 * // Muestra una sección en el documento con la factura para Juan Pérez
 */


function pintarHtml(precio, iva, cliente){
    document.writeln(`<section>
            <h1>Factura para cliente ${cliente}</h1>
            <p>El coste total es ${precio}€. El IVA aplicado es ${iva}</p>       
        </section>`);
}

//Principal

function main (precioBase, porcentaje, cliente){
    const iva = calcularPorcentaje(precioBase, porcentaje);
    const precioFinal = sumar(precioBase, iva);
    pintarHtml(precioFinal, iva, cliente);
}

main(1200, 21, 'Corte Inglés');