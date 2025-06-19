edad = int(input('¿Cual es tu edad?: '))

if edad >= 0 and edad < 18:
    print('Eres menor de edad')
elif edad >= 18 and edad <= 110:
    print('Eres mayor de edad')
else:
    print('La edad no es valida')