#quiero un interfaz que me permita calcular sumas,restas,multiplicaciones,divisiones de una lista de numeros
#opcion 1 de importacion de modulos
import lib.funciones as fn # fn es un nombre aleatorio,se puede poner lo que se quiera y ponerlo delante de las llamadas a las funciones

#opcion 2 de importacion de modulos de solo los que me hagan falta
#from lib.funciones import restar, numeros (importo de la libreria solo lo que me interesa)

def main():
    interfaz = """### Dime que opcion quieres realizar
    [1] Sumar los numeros
    [2] Restar los numeros
    [3] Multiplicar los numeros
    [x] salir
    """
    print(interfaz)
    opcion = input('Elige una opcion: ')
    resultado = 0
    if opcion == '1':
        resultado = sum(fn.numeros) #sum te suma todos los numeros de una lista
        print(f'El resultado de la suma es: {resultado}')
        main()
    elif opcion == '2':
        resultado = fn.restar(fn.numeros)
        print(f'El resultado de la resta es: {resultado}')
        main()
    elif opcion == '3':
        resultado = fn.multiplicar(fn.numeros)
        print(f'El resultado de la multiplicacion es: {resultado}')
        main()
    elif opcion == 'x':
        pass
        print('Hasta pronto')
    else:
        print('opcion no valida, vuelve a intentarlo')
        main()
if __name__ == '__main__':
    main()
    