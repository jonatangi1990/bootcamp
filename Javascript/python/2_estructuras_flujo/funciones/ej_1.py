#Calcular el precio de venta al publico de un objeto
#Preciopvp = precio base + (precio base x el impuesto)
# ordenador de 1000€ + (1000€ * 0,21) = 1210€
#pedir por pantalla el precio del ordenador y el impuesto y calcular el resultado imprimiendo por pantalla





def calcular_pvp(precio, impuesto = 21):
    #calcular el porcentaje
    porcentaje = impuesto / 100
    #calcular el precio con el impuesto
    resultado = precio + (precio * porcentaje)
    print(resultado)
    
precio = float(input('Dime un precio: '))    
impuesto = float(input('Dime un impuesto: '))

calcular_pvp(precio)
calcular_pvp(precio, impuesto)