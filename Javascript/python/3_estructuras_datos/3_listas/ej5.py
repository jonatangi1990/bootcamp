# Tengo una lista de 20 notas de examenes con diferentes valores.

notas = [7, 5, 9, 6, 8, 10, 4, 3, 2, 1, 7, 8, 6, 5, 9, 10, 3, 4, 2, 1]

# Calcular separando en funciones , quiero la media de las notas, el % de aprobados, la nota mayor, la nota menor y una lista ordenada de mayor a menor
def sumar(lista): # creo la funcion sumar que recibe una lista
    suma = 0 #inicia en 0
    for nota in lista: #recorro la lista
        suma += nota
        return suma #retornamos la suma
    
    
def calcular_media(lista): #creo una funcion que recibe una lista
    suma = sumar(lista)
    return suma / len(lista) #el total de la suma lo dividimos entre la longitud de la lista

def calcular_porcentaje_aprobados(lista):
    cantidad = len(lista) #esta es la cantidad de notas
    aprobados = 0 #comenzamos en 0
    for nota in lista:
        if nota >= 5:
            aprobados += 1
    return (aprobados * 100) / cantidad   #calculamos el numero de aprobados y despues lo multiplicamos por 100 y dividimos entre la cantidad de notas para sacar la media de aprobados

nota_mayor = max(notas)
nota_menor = min(notas)

def ordenar_notas(lista):
    lista.sort(reverse = True)
    return lista
    #creamos la funcion de ordenar notas de mayor a menor
    
def main():
    texto = """¿Que quieres realizar?
    [1]. Calcular media
    [2]. Ordenar de mayor a menor
    [3]. Calcular nota maxima
    [4]. Calcular nota minima
    [5]. Calcular el porcentaje de aprobados
    """
    print(texto)
    opcion = input('Que opcion elijes: ')
    if opcion == '1':
        media = calcular_media(notas)
        print(f'la media de notas es {media}')
    elif opcion == '2':
        ordenada = ordenar_notas(notas)
        print(ordenada)
    elif opcion == '3':
        print(nota_mayor)
    elif opcion == '4':
        print(nota_menor)
    elif opcion == '5':
        porcentaje = calcular_porcentaje_aprobados(notas)
        print(f"El porcentaje de aprobados es: {porcentaje}%")
    else:
        print('opcion no valida')
        







