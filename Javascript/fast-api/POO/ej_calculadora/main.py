from Calculadora import Calculadora

# instanciar el objeto calculadora , crear una calculadora en base a la clase.
#casio = Calculadora()
#resultado = casio.sumar(1,2,3,4,5,6,7,8,9)
#print(resultado)

def main():
    casio = Calculadora()
    interfaz = """Calculadora: 
    [1] sumar
    [2] restar
    [3] multiplicar
    [4] dividir
    [x] salir
    
    """
    
    print(interfaz)
    
    option = input('¿Que operacion quieres realizar?')
    
    if option == '1':
        lista_numeros = [] #creamos una lista para almacenar los numeros
        cantidad = int(input('Dime cuantos numeros quieres sumar: '))
        for i in range(0, cantidad):
            numero = int(input('Dime un numero: '))
            lista_numeros.append(numero) #con append añado
        print(casio.sumar(lista_numeros))
            
        pass
    
    elif option == '2':
        numero1 = float(input('Dime el primer numero: '))
        numero2 = float(input('Dime el segundo numero: '))
        print(casio.restar(numero1, numero2))
        
    
    elif option == '3':
        numero1 = float(input('Dime el primer numero: '))
        numero2 = float(input('Dime el segundo numero: '))
        numero3 = float(input('Dime el tercer numero: '))
        print(casio.multiplicar(numero1, numero2, numero3))
    
    elif option == '4':
        numero1 = float(input('Dime el primer numero: '))
        numero2 = float(input('Dime el segundo numero distinto de cero: '))
        print(casio.dividir(numero1, numero2))
        
    
    elif option == 'x':
        print('Hasta la vista bebe')
    else:
        print('Opcion no valida')
        main()











if __name__ == '__main__':
    main()