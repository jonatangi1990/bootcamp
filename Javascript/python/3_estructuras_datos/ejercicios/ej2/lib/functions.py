def remplazar(texto, palabra):
    print(texto)
    opcion = input('Del texto impreso que palabra o letra quieres remplazar: ')
    valor = texto.replace(opcion, palabra)
    return valor