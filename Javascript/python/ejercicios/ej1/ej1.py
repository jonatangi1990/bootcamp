#1 - Hacer un programa que visualice los 10 primeros múltiplos de un número que introducimos por teclado. A continuación nos visualice la suma de todos ellos. Separando responsabilidades.


def presentarResultado(valor, numero):
    print(f"El resultado de los multiplos del {numero} es {valor}")
def multiplicar(n1, n2):
    return n1 * n2
def main():
    numero = int(input('Dame un numero: '))
    resultado = 0
    for i in range(1, 11):
        resultado += multiplicar(numero, i)
    presentarResultado(resultado, numero)
    
    
main()