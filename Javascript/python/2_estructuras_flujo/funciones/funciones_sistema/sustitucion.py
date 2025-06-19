frase = "El coche de Joaquin es un ferrari rojo"
#Joaquin -> David

resultado = frase.replace('Joaquin', 'David') #Remplaza la palabra que se pone primero por la otra que pongamos
#Con replace cambia todos lo que encuentre, no se detiene al encontrar el primer valor

texto = 'La p&rte contr&t&nte de l& primer& p&rte'
texto = texto.replace('&', 'a')
print(texto)
