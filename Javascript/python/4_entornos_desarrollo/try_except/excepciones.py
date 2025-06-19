#try gestiona la parte correcta - except gestiona todo lo que de error
# https://docs.python.org/3/library/exceptions.html es la pagimna de python donde se pueden ver los codigos de exception


def dividir(n1, n2):
    try:
        resultado = n1 / n2
        print(resultado)
    except ZeroDivisionError:
        print('No se puede dividir por valor 0')

def main():
    try:
        
        numero1 = int(input('Dime un numero'))
        numero2 = int(input('Dime otro numero'))
        print(numero1, numero2)
    except ValueError:
        print('No podemos introducir caracter alfabeticos ni especiales, solo numericos')








if __name__ == "__main__":
    main()