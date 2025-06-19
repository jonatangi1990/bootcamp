numero_1 = 23
numero_2 = 12

#una funcion puede tenr parametros obligatorios y optativos, la diferencia es el parameto optativo tiene una igualdad, OJO siempre primero todos los parametros obligatorios y luego los optativos
def sumar(numero_1, numero_2 = 2): #se puede poner un numero optativo (como el puesto en numero_2 por si no se declara ninguno)
    resultado = numero_1 + numero_2
    print(resultado)

sumar(12, 3)
sumar()

