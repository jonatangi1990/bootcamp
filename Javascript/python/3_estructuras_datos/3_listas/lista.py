#Una lista suele ser un conjunto de elementos del mismo tipo, no obligatoriamente peero si comunmente. Es mutable tanto en posicion como en cada elemento pudiendo crecer o mermar de longitud
lista_nombres = ['Carlos', 'Pedro', 'Juan']
lista = ['Carlos', 30, True]

#longitud lista

print(len(lista_nombres)) #3
#las listas de numeran de 0 a n-1 siendo n la longitud

# podemos imprimir un valor concreto
print(lista_nombres[2]) #Juan

# podemos añadir elementos

nombre_nuevo = 'Alberto'

lista_nombres.append(nombre_nuevo) #funciona igual que el push en javascript añadiendo el objeto al final de la lista (append solo deja añadir 1 elemento, no mas a la vez)


#podemos añadir varios elementos a la lista
lista_nombres.extend(['Alejandro', 'Patri'])

#añadir un elemento en cualquier posicion
lista_nombres.inset(2, 'Jonathan')
print(lista_nombres)

#sobreescribiendo un elemento
lista_nombres[1] = 'Pepe'
print(lista_nombres)


# podemos copiar la lista o parte de la lista

otra_lista = lista_nombres[2:3]

print(otra_lista)

#La lista es mutable

lista_nombres[0] = 'Almudena'
print(lista_nombres)

# podemos recorrer una lista

for nombre in lista_nombres:
    print(nombre)
    


# borrar un elemento en cualquier posicion (pop)
lista_nombres.pop()
print(lista_nombres)

lista_nombres.pop(0) #asi borramos el elemento de dicha posicion

print(lista_nombres)

lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lista_nombres.pop(2)
print(lista_numeros)

#eliminar por contenido
lista_nombres.remove('Juan')
print(lista_nombres)

#lista_nombres.remove('JUAN'.title()) #Juan #de esta manera transformaria Juan ya que tiene que estar escrito igual que en la lista



#vaciar una lista

lista_numeros.clear()
print(lista_numeros)

