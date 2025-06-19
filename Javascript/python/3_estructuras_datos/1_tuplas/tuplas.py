# Una tupla es una lista de valores inmutables (que no se puede modificar). Proteger el valor de lo que hay dentro para que nadie lo pueda cambiar. (las tuplas van entre parentesis) ()

tupla = ('Juan', 42, True)
frutas = ('naranjas', 'peras', 'platanos', 'cerezas')

print(tupla)
print(frutas)

#longitud
print(len(frutas)) #asi leeria su longitud

#imprimir los datos de la tupla
print(frutas[1]) #peras
print(frutas[-1]) #cerezas


#copiar tupla
otras_frutas1 = frutas[1:3]#peras,platanos,cerezas,manzanas
print(otras_frutas1)
otras_frutas2 = frutas[1:5:2]#peras, cerezas
print(otras_frutas2)

print(frutas[2:]) #imprime desde platanos hasta el final"



print("--------------Recorrer los elementos de una tupla---------------")
for i in range(0, len(frutas)):
    print(frutas[i])
    
for fruta in frutas:
    print(frutas)
    
    #esta forma es mas operativa que la anterior pero ambas son correctas
    
# ERROR intentar modificar un valor de la tupla
# frutass[0] = 'chirimolla'  estaria mal hecho, no se puede modificar y daria error

#eliminar una tupla
del frutas #asi se elimina toda la tupla
print(frutas) # ya no existiria la tupla de frutas

