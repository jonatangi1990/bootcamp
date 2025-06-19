texto = 'Hola'
otro_texto = 'en un lugar de la mancha'

#Me permite convertir el texto sin modificar la variable original
print(otro_texto.upper()) # EN UN LUGAR DE LA MANCHA
print(otro_texto) # en un lugar de la mancha
print(texto.lower()) #hola
print(otro_texto.capitalize()) #En un lugar de la mancha
print(otro_texto.title()) #En Un Lugar De La Mancha
print(texto.swapcase()) #hOLA (pasa las mayus a minis y las minus a mayus)

# funcion para saber la longitud de una cadena
print(len(texto)) #4
print(len(otro_texto)) # 24 (cuenta espacios)

#Comprobacion
#sabes cuantas "a" hay en la frase?
print(otro_texto.count('a')) #4 (Cuenta cuantas "a" hay en esa frase pero no las cuenta si le pido un "a" minuscula y tiene alguna mayuscula, las mayus no las contaria)
print(otro_texto.lower().count('a')) # lo convertimos todo a minuscula y luego le pedimos que lo cuente por si tiene alguna en mayuscula que nos lo pueda contar bien




