productos = [
    {
        'id': 1,
        'title': 'leche desnatada',
        'price': 0.35,
        'quantity': 10
    },
    {
        'id': 2,
        'title': 'carne',
        'price': 9.35,
        'quantity': 3
    },
    {
        'id': 3,
        'title': 'pescado',
        'price': 12,
        'quantity': 4
    },
]

#precio carne
print(productos[1]['price'])

#Sacar el listado por pantalla
def printAllProducts(lista):
    for product in lista:
        print(f"### {product['title']}: {round(product['price'] * product['quantity'], 2)} € ###") #con round redondeamos los decimales que devuelve la operacion y añadiendo el 2 del final significa que quiero 2 decimales, si pusiese un numero mas alto le estaria pidiendo ese numero de decimales
        
        
printAllProducts(productos)


#sacar el coste total de todo el listado (79.55€)


def calcular_coste_total(lista):
    total = 0
    for producto in lista:
        total += (producto['price'] * producto['quantity'])
    print(f'El coste total del listado de producto es: {total} €')


calcular_coste_total(productos)

