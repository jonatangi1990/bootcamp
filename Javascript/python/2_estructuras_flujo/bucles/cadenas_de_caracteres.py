texto = 'En un lugar de la mancha'
# Una cadena de caracteres (string) se numera de 0 a n-1 siendo n la longitud de la cadena.

#Longitud de una cadena cadena.length() en javascript
#En python
print(len(texto)) #24

#Podemos recoger o píntar o separar la cadena usando su posicion

texto_corto = texto[6:11]
print(texto_corto)

print(texto[0]) #E
print(texto[23]) #A
print(texto[-1]) #A
print(texto[-2:]) #hA (recorreria desde la posicion -2 hasta el final)
print(texto[0:]) #En un lugar de la mancha
