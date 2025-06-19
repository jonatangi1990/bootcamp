from lib.functions import verificar_dni



def main():
    interfaz = """###Bienvenido a tu app###
    [1]. Introduzca su DNI
    [x]. Salir
    """
    print(interfaz)
    
    opcion = input('Dime que opcion quieres realizar: ')
    if opcion == '1':
        dni = input('Introduce tu DNI: ')
        msg = verificar_dni(dni)
        print(msg)
        
    elif opcion == 'x':
        print('Nos vemos pronto')
        
    else:
        print('Opcion no valida')
        main()
        
    
    
    
    
if __name__ == "__main__":
    main()