nombres = ['Juan', 'Manuel', 'Marta', 'Lucia',
           'Elena', 'Miguel', 'Lucia', 'Angel', 'Lucia']

# quiero una funcion que me permita contar cuantas veces se repite un elemento de la lista
print(nombres.count('lucia'.title())) # con count contamos cuantas veces se repite el elemento en la lista y con .title lo transformamos para que este igual

#invertir la lista.mODIFICANDO LA LISTA ORIGINAL
nombres.reverse()
print(nombres)


#lista de numeros MAX y MIN
numeros = [1, 34, 445656, 543, 13234, 566, 23, 7, 213213123]
print(max(numeros)) # me devuelve el numero mas alto que hay dentro de la lista
print(min(numeros)) # me deviuleve el numero mas bajo que hay dentro de la lista

numeros2 = [12,34,5,6,74,34,6,8,1]
letras = ['a', 'F','D', 'i', 'b']

# ordenamos las listas con SORT() y lo ordena de menor a mayor

numeros.sort()
print(numeros2)

#ordenador de mayor a menor

numeros2.sort(reverse=True)
print(numeros2)

#Cuando ordenamos en orden alfabetico primero se ordenan las mayusculas y luego las minusculas
letras.sort(key=str.lower) #le pedimos que lo transforme a minusculas y lo ordene sin modificar la lista
print(letras)