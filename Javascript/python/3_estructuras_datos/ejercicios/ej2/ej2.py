# quiero que se pida un texto por pantalla, y limpiar la frase del caracter que elija el usuario por el que nosotros queramos
from lib.functions import remplazar



def main():
    frase = input('Dime la frase que quieres modificar: ')
    palabra = input('Palabra por la que quieres sustituir: ')
    resultado = remplazar(frase, palabra)
    print(resultado)







if __name__ == "__main__":
    main()