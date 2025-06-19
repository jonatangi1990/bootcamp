"""
3 - Hacer un programa que solicite y visualice una serie de números distintos de cero. El programa debe terminar cuando introduzcamos el valor cero que no se debe visualizar. Finalmente se desea obtener la cantidad de valores leídos distintos de cero.
"""
def main():
    numero = input('Dame un numero: ')
    cadena = ""
    while(numero != "0"):
        cadena += numero + " "
        numero = input('Dame otro numero: ')
    else:
        print(cadena)
main()