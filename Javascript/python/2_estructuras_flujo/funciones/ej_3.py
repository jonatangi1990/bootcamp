# Pedir un numero por pantalla y siempre que sea impar calcular el resultado de su serie numerica si no lanzar un mensaje de "es un numero par"
# si recibo un 4 -> es un par, no calculo.
# si recibo un 5 -> 5 + 4 + 3 + 2 + 1 = 15

numero = int(input('Dame un numero impar: '))


def paridad(numero):
    return True if numero % 2 == 0 else False
        
    
def calcular_serie(numero):
    sumar = 0
    for i in range(numero , 0, -1):
        sumar += i
    return sumar
    
def main(n):
    es_par = paridad(n)
    if not es_par:
        print(calcular_serie(n))
    else:
        print('Es par, no calculo')
        
main(numero)