## operador ternario es un condicional con secuencia de escape. Si una variable se le asigna un valor dependiendo de un condicional con secuencia de escape es un ternario

mensaje = ""
numero = 12

#solo tiene 2 posibles resultados

if numero % 2 == 0:
    mensaje = 'Es un numero par'
else:
    mensaje = 'Es numero impar'
    
#operador ternario en python se llama operador condicional abreviado
#javascript mensaje = (numero % 2 === 0) ? 'par' : 'impar';

mensaje = 'Es un numero par' if numero % 2 == 0 else 'Es impar'