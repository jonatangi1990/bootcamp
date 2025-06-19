# Crear una funcion que te diga si un numero es primo. Un numero que solo es divisible entre si mismo y 1, si encuentro un numero que divida a el numero pedido entre el y 1 entonces el numero no es primo.
#12 => 12/11 12/10 12/09 ...

# Crear una funcion que reciba por parametro un numero y me devuelva si es primo o no

#mirar cuantas funciones se necesitan para encapsular la funcionalidad
#primero resolver el problema
#replantear la solucion
#divide y venceras

#pedir numero por pantalla
numero = int(input('Dame un numero: '))

def resto(n1, n2):
    return n1%n2
#contar desde ese numero menos 1 hasta 2
def es_primo(numero):
    mensaje = 'Es primo'
    for i in range(numero - 1, 1, -1): # recorre el numero desde el introducido hasta el 2 recorriendolo de arriba hasta abajo
        resultado = resto(numero, i) # guardamos el resultado de la division en resultado
        if(resultado == 0):
            mensaje = 'No es primo'
            break #si lo encuentra corta el bucle
    return mensaje


print(es_primo(numero))
    