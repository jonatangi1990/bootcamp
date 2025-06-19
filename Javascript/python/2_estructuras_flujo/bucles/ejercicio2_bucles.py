# Factorial de un numero

#Pedir un numero por pantalla y sacarme el factorial
# 5 * 4 * 3 * 2 * 1 = 120

numero = int(input('Dame un numero: '))
resultado = 1

for i in range (1, numero + 1):
    resultado = resultado * i
else:
    print(resultado)