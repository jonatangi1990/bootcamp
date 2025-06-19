#2 - Realizar un aplicación que me permita calcular el PVP de venta de un producto para una tienda.
#El programa me tiene que pedir un precio de proveedor, el impuesto que desea aplicar y el margen de beneficio que quiere tener en ese producto.
#En función de estos parametros quiero calcular el precio total del producto

#1000 + 30% + 21%
#1000 + 300 + 273 = 1573

def calcular_porcentaje(precio, porcentaje):
    return (precio * porcentaje) / 100

def sumar(n1, n2):
    return n1 + n2

def pintarResultado(precio_final, precio, impuesto, beneficio):
    print(f'El pvp de un producto cuyo valor es {precio}, el iva es del {impuesto}% y quiero sacarle el {beneficio}% de beneficio es: {precio_final}€')


def main():
    precio_proveedor = int(input('Dime el precio del producto: '))
    impuesto = int(input('Dime el porcentaje del impuesto: '))
    porcentaje_beneficio = int(input('Dime el beneficio que le quieres sacar al producto: '))
    
    valor_beneficio = calcular_porcentaje(
        precio_proveedor, porcentaje_beneficio)
    precio_con_beneficio = sumar(precio_proveedor, valor_beneficio)
   
    
    iva = calcular_porcentaje(precio_con_beneficio, impuesto)
    pvp = sumar(precio_con_beneficio, iva)
    pintarResultado(pvp, precio_proveedor, impuesto, porcentaje_beneficio)

main()