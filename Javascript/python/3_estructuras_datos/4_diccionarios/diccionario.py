# Un diccionario es un conjunto de elementos, en otros lenguajes se les conoce como array asociativos en javascript son JSON. Se elimina el concepto de posicion, para cambiarlo por el concepto de clave:valor

alumno = {
    'nombre': 'juan',
    'edad': 43,
    'estado': True,
    'dni': '12345678Z'
}

print(alumno)

# error
#print(alumno[0])
#no se puede acceder por posicion

#opcion1: con la forma de corchetes como los arrays poniendo la clave de la cual quiero su valor
print(alumno['nombre'])

# opcion2: getter una funcion que devuelve el valor pasado por parametro y devuelve su valor
print(alumno.get('edad'))


#recorrer los elementos de un diccionario
#Recorrer y optener todas las claves(key)
for key in alumno.keys(): #[nombre, edad, estado, dni]
    print(key)
    
#Recorrer y optener todas los datos que estan dentro de las key
for value in alumno.values(): #[juan, 43, True, 12345678Z]
    print(key)
    
#Recorrer y optener todas los datos
for key, value in alumno.items(): #[juan, 43, True, 12345678Z]
    print(key, value)
    
#Es modificable. ¿Como modificamos un elemento del diccionario?

alumno['edad'] = 99

print(alumno)

#Añadir elementos al diccionario, lo hacemos a traves de la clave
alumno['direccion'] = 'Calle numero piso puerta' #direccion es la key y despues del signo = seria el valor
print(alumno)

#Eliminar un elemento del diccionario, tambien usaremos la clave
alumno.pop('direccion') #elimina la clave y su valor asociado
print(alumno)

# Vaciar un diccionario
alumno.clear()
print(alumno)

#Borrar un diccionario
del alumno
