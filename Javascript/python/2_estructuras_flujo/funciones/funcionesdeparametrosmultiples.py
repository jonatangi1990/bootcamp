#function sumar (...numeros): esto seria en javascript

def sumar(*numeros):
    sumar = 0
    for i in range(0, len(numeros)):
        sumar += numeros[i]
    return sumar
    
print(sumar(1, 1, 1, 1, 1))#5
print(sumar(2, 5, 6, 2))#15

# Calcular la media de n numeros

def media(*numeros):
    cantidad = len(numeros)
    suma = sumar(*numeros)
    print(suma / cantidad)



media(2, 3, 4, 5)