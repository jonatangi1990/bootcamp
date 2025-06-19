from lib.funtions import filtrar_por_nota, alumnos, pintar_alumnos, extraer_nombres_mayuscula, calcular_nota_media




def main():
    interfaz = """###Bienvenido a tu app###
    [1]. Lista de aprobados
    [2]. Lista de nombres
    [3]. Nota media
    [x]. Salir
    """
    print(interfaz)
    
    opcion = input('Dime que opcion quieres realizar: ')
    if opcion == '1':
        lista_aprobados = filtrar_por_nota(alumnos)
        pintar_alumnos(lista_aprobados)
    
    elif opcion == '2':
        lista_nombres = extraer_nombres_mayuscula(alumnos)
        print(lista_nombres)
    
    elif opcion == '3':
        media = calcular_nota_media(alumnos)
        print(f'La nota media de los alumnos es {media}')
    
    elif opcion == 'x':
        print('Nos vemos pronto')
        
    else:
        print('Opcion no valida')
        main()







if __name__ == "__main__":
    main()
