#Crear una funcion que reciba una lista y un numero, y me devuelva cuantas veces aparece ese numero en la lista

def cuanto_se_repite(lista, numero):
    return lista.count(numero)

numeros = [1, 2, 3, 423, 4, 3, 2, 3, 4, 5, 4, 6, 7, 8, 9, 65, 8, 7, 6]
numero = 7

resultado = cuanto_se_repite(numeros, numero)
print(resultado)


