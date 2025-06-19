# Pedir un numero de 1 a 9 por pantalla y sacar la tabla de multiplicar hasta el x10 de dicho numero.

numero = int(input('Dame un numero: '))


for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")
    