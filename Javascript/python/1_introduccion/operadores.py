#Operadores matematicos

numero_1 = 20
numero_2 = 3

print( numero_1 + numero_2 ) #sumar
print( numero_1 - numero_2 ) #restar
print( numero_1 * numero_2 ) #multiplicar
print( numero_1 / numero_2 ) #division
print( numero_1 // numero_2 ) # division entera - sin resto
print( numero_1 % numero_2 ) #modulo de la divion - resto de la division
print( numero_1 ** numero_2 ) #potencia


#Operadores de comparacion

print(numero_1 > numero_2)
print(numero_1 < numero_2)
print(numero_2 >= numero_2)
print(numero_1 <= numero_2)
print(numero_1 == numero_2)
print(numero_1 != numero_2)

#Operadores logicos (&& => and, || => or, ! => not)

edad = 12
genero = 'mujer'
#quiero una mujer mayor de edad

print( edad >= 18 and genero == 'mujer') #False
#quiero un hombre o mujer mayor de 18 años
print((genero == 'mujer' or genero == 'hombre') and (edad >= 18)) #True

#para negar variables casi siempre de tipo booleano o operaciones de resultado booleano
print(not(True)) #False
print(not (edad > 18)) #True
