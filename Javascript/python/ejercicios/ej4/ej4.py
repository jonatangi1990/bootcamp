lista_nombres = ['Juan', 'Lucia', 'Marta', 'Pepe', 'Marta', 'Rodrigo', 'Marcos', 'Marta']






def main(lista):
    nombre_buscar = input('Dame un nombre: ').title()
    posicion = 0
    lista_posiciones = []
    for nombre in lista:
        if nombre == nombre_buscar:
            lista_posiciones.append(posicion)
        posicion += 1
    print(lista_posiciones)
    
    
    
    


if __name__ == "__main__":
    main(lista_nombres)
