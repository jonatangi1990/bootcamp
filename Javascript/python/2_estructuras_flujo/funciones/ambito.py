frase = 'En un lugar de la mancha' # variable de ambito global, quiere decir que se puede usar en cualquier bloque de codigo

def potencia(n1, n2):
    resultado = n1 ** n2 #resultado es una variable local, solo existe dentro de la funcion
    return resultado


valor = (2,2)

if valor == 4:
    # si se cumple la condicion la variable sera global
    texto = 'hola desde if'

print(frase)