# Quiero una lista de nombres pedidos por pantalla, quiero 10 nombres que empiecen por "A"


def lista_nombres_con_a(cantidad):
    lista = []
    while len(lista) < cantidad:
        nombre = input('Dame un nombre: ')
        if nombre[0].lower() == 'a':
            lista.append(nombre)
    print(lista)




lista_nombres_con_a(10)