# Pedir por pntalla un numero y decir si es divisible por 2 y por 5
numero = float(input('Dame un numero: '))
mensaje = ""

if numero % 2 == 0 and numero % 5 == 0:
    mensaje = 'Tu numero es divisible por 2 y por 5'
else:
    mensaje = 'El numero no es divisible entre 2 y 5'    

print(mensaje)

#Operador ternario
mensaje = 'El numero es divisible por 2 y 5' if numero % 2 == 0 and numero % 5 == 0 else 'el numero no es valido'

print(mensaje)