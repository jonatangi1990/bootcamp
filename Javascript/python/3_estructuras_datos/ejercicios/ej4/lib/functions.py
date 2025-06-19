#funcion calcular letra numeros/23

def verificar_dni(dni):
    numero = int(dni[0: len(dni) -1])
    letra = dni[-1].upper()
    letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E','T']
    posicion = numero % 23
    if letras[posicion] == letra:
        return 'DNI Valido'
    else:
        return 'DNI Invalido'
    


    
    