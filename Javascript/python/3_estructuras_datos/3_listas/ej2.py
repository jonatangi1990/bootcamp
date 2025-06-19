from random import * #esto me permite importar randint, uniform
# https://ellibrodepython.com/
# llenar una lista con 100 numeros pares


lista = []

for i in range(0, 200): 
   if (i % 2 == 0):
       lista.append(i)
       
#print(lista)

def insertar_pares(cantidad):
    lista_pares = []
    while len(lista_pares) <= cantidad:
        numero_aleatorio = randint(0, 1000)
        if numero_aleatorio % 2 == 0:
            lista_pares.append(numero_aleatorio)
    print(lista_pares)
    
insertar_pares(100)


    