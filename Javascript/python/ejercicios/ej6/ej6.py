lista = ['Juan', True, 23, 'Begoña', 'Tigre',
         False, True, 12, 34, False, 34, 'Patri']


def sacar_grupos(list, tipo):
    lista = []
    for item in list:
        if type(item) == tipo:
            lista.append(item)
    return lista


boleanos = sacar_grupos(lista, bool)
numeros = sacar_grupos(lista, int)
textos = sacar_grupos(lista, str)
print(boleanos)
print(numeros)
print(textos)

suma = sum(numeros)
print(suma)


def convertir_minusculas(list):
    lista = []
    for texto in list:
        lista.append(texto.lower())
    return lista


print(convertir_minusculas(textos))


#tengo la lista de numeros quiero que me deis la lista de sus dobles

def lista_dobles(list, valor):
    dobles = []
    for numero in list:
        dobles.append(numero * valor)
    return dobles

print(lista_dobles(numeros, 2))