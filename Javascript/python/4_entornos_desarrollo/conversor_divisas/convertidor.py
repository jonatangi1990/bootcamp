
from lib.functions import obtener_tipo_cambio, convertir_cantidad
def main():
    interfaz = """### Conversor de divisa ###"""
    print(interfaz)
    moneda_actual = input('Dame la moneda de partida, ej:  EUR, USD: ').upper()
    try:
        cantidad = float(input('Dime cuanto dinero quieres cambiar: '))
    except ValueError: #meto el error especifico, si no pongo el nombre del valor especifico me valdria para cualquier error
        print('Necesito un numero para poder hacer la conversion')
        main()
    except:
        print('Sigues sin meter un numero correcto')
        
    moneda_objetivo = input('Dame la moneda de tipo cambio, ej: EUR, USD:').upper()
    
    rate = obtener_tipo_cambio(moneda_actual, moneda_objetivo)
    
    conversion = convertir_cantidad(cantidad, rate)
    
    if conversion:
         print(f'El resultado de convertir {cantidad} {moneda_actual} en {moneda_objetivo} es {conversion}')
    
    else:
        print('No se ha podido realizar la conversion')
        main() #Recursividad
    










if __name__ == "__main__":
    main()