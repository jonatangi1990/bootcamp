#Funciones que pueden devolver parametros
#funciones que no piuntar ningun elemento solo dan valores se llaman "procedures(procedimientos)"
def sumar(numero_1, numero_2):
    suma = numero_1 + numero_2
    return suma

def restar(numero_1, numero_2):
    return numero_1 - numero_2

def print_result(valor, calculo, numero1, numero2):
    print(f"El valor de {calculo} es: {valor}")

def calcular(n1, n2, tipo):
    resultado = 0
    if (tipo == 'sumar'):
        resultado = sumar(n1 + n2)
    elif(tipo == 'restar'):
        resultado = restar(n1 - n2)
    print_result (resultado, tipo, n1, n2)

calcular(12, 7, 'sumar')