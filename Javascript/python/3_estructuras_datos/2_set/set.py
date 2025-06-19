# Un set es un conjunto de elementos unicos. Se utiliza para eliminar duplicados.

conjunto = {1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4}

print(conjunto)

listaNombre = ['Juan', 'Patri', 'Alejandro','Jonathan', 'Eduard', 'Alejandro', 'Angel']
print(listaNombre)
conjunto_sin_duplicado = list(set(listaNombre)) #lo transforma en un conjunto sin duplicados
print(conjunto_sin_duplicado)

# los set no tienen posicion, son de posicion aleatoria
# me impide leer exactamente una posicion
frutas = {'manzanas', 'peras', 'platanos', 'kiwis'}
#print(frutas[0]) #me daria error ya que no se puede leer la posicion ya que siempre es aleatoria

# añadir elementos (no me va a dejar añadir elementos duplicados) y eliminar elementos

#agregar elementos al set. OJO siempre que no esten duplicados
frutas.add('melon')
print(frutas)

# borrar elementos de un set, como no tenemos posicion

frutas.remove('melon')
print(frutas)

#discard me permite borrar un elemento del set exista o no. Si no existe no lo borra pero no da error

frutas.discard('Alejandro')
print(frutas)

# los sets se pueden borrar y tambien se pueden vaciar

#vaciar un set

frutas.clear()
print(frutas)

#borrar un set

del frutas
print(frutas)