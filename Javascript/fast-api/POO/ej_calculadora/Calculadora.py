class Calculadora:
    # como no voy a inicializar ninguna propiedad de la clase no necesito el metodo __init__(constructor) NO es obligatorio.
    def sumar(self, numeros):
        resultado = 0
        for numero in numeros:
            resultado += numero
        return resultado
    
    def restar(self, n1, n2):
        return n1 - n2 if n1 >= n2 else n2 - n1 #ternario
        #resultado = 0
        #if n1 > n2:
        #    resultado = n2 - n1
        #else:
        #    resultado = n1 - n2
        #return resultado
    
    def multiplicar(self, *numeros):
        resultado = 1
        for numero in numeros:
            resultado *= numero
        return resultado
    
    def dividir(self, n1, n2):
        try:
            return n1 / n2
        except ZeroDivisionError: #ZeroDivisionError es el nombre de la excepcion para el error que saldria
            print('No se puyede dividir por cero')
    
