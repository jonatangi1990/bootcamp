def agregar(lista, nombre):
    cantidad_inicial = len(lista)
    lista.append(nombre)
    return 'No se agrego correctamente' if cantidad_inicial == len(lista) else 'Nombre agregado correctamente'

def buscar_nombre(list, name):
    for nombre in list:
        if nombre == name:
            return True
    return False

def borrar(lista, nombre):
    cantidad_inicial = len(lista)
    estado = buscar_nombre(lista, nombre)
    if estado == True:
        lista.remove(nombre)
    else:
        return 'El nombre introducido no existe en la lista'
    print(lista)
    return 'No se borro correctamente' if cantidad_inicial == len(lista) else 'Nombre borrado correctamente'

def ordenar_lista(list, orden):
    if orden =='a-z':
        list.sort(key=str.lower)
        return list
    elif orden == 'z-a':
        list.sort(key=str.lower, reverse = True)
        return list
    else:
        print('no es un caracter correcto')
        return list
    
        
