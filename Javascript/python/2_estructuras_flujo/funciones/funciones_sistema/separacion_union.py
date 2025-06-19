# Metodos de separacion y metodos union
nombre = 'Juan Antonio'
apellidos = 'Perez'
edad = 43
separador = '-'

#quiero sacar por pantalla Juan antonio - Perez - 43

print(f"{nombre} {separador} {apellidos} {separador} {edad}")
otro_texto = separador.join([nombre,apellidos,str(edad)]) #transformar edad a string
print(otro_texto)

#poartir partition - split
frase = 'El presidente dijo: Hemos ganado las elecciones'
palabras = frase.partition(': ') #lo separa en 3 partes, lo de antes de donde le dije que lo partiese, la parte que le marque para que lo partiese y lo de despues de donde le mande partir
print(palabras)

palabras2 = frase.split(": ") #lo devuleve sin los espacios
print(palabras2)

texto = 'a b c d e f g h i'
lista_palabras = texto.split(" ") #lo devuelve sin los espacios
print(lista_palabras)

#splitlines

cadena = """Hola
bienvenido
al maravilloso
mundo
de
Python
"""
print(cadena.splitlines())

#deletrear una frase
palabra = 'supercalifragilistico' #separa todo de caracter en caracter
print(list(palabra))