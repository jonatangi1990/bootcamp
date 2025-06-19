from lib.functions import agregar, borrar, ordenar_lista

nombres = []

def main():
    interfaz = """###Bienvenido a tu app###
    [1]. Agregar nombre a mi lista
    [2]. Eliminar un nombre de mi lista
    [3]. Ordenar la liosta por orden alfabetico A-Z
    [4]. Cantidad de nombres de la lista
    [x]. Salir
    """
    print(interfaz)
    
    opcion = input('Dime que opcion quieres realizar: ')
    if opcion == '1':
        nuevo_nombre = input('Dime el nombre a insertar: ').title()
        msg = agregar(nombres, nuevo_nombre)
        print(msg)
        main()
    elif opcion == '2':
        nombre_borrar = input('Dime el nombre que quieres borrar: ').title()
        msg = borrar(nombres, nombre_borrar)
        print(msg)
        main()
    elif opcion == '3':
        orden = input('Que orden quieres, A-Z o Z-A?').lower()
        order_list = ordenar_lista(nombres, orden)
        print(order_list)
        main()
    elif opcion == '4':
        print(f'El listado de nombres contiene {len(nombres)} nombres')
        main()
    elif opcion == 'x':
        print('\033[92mHasta luego\033[0m') #asi se veria de color cuando se imprima en la consola
    else:
        print('Opcion no valida')
        main()







if __name__ == "__main__":
    main()