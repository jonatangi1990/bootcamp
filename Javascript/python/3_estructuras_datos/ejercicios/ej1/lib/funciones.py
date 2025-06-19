numeros = [1, 2, 3, 4, 5, 6, 7, 8]


def multiplicar(lista):
    multiplicacion = 1
    for numero in lista:
        multiplicacion *= numero
    return multiplicacion


def restar(lista):
    numeros.reverse()
    resta = lista[0]
    for numero in lista:
        resta -= numero
    return resta