import math

numero = 5
print(float(numero)) # 5.0
print(int(3.3)) # 3 me quedo solo con la parte entera

numero = 4.23456
print(round(numero, 2)) #redondea con 2 decimales
print(round(numero)) #redondea el numero si fuese decimal

#Raiz cuadrada
print(math.sqrt(256))
#Redondeo a la baja
print(math.floor(4.56)) #4
#Redondeo a la alta
print(math.ceil(4.2)) # 5
#Suma de muchos numeros
suma = math.fsum([1, 22, 3, 4, 54, 6, 7, 8, 9])
print(suma)


