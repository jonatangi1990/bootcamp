#que datos quiero almacenar del alumno: nombre, edad, email. TODOS LOS CAMPOS SON OBLIGATORIOS

alumnos = []

def agregar_alumnos(lista):
    nombre = input('Dime el nombre del alumno: ')
    edad = input('Dime la edad del alumno: ')
    email = input('Dime tu email')
    if nombre != "" and edad != "" and email != "":
        nuevo_alumno = {
            'nombre': nombre,
            'edad': int(edad),
            'email': email
        }
        lista.append(nuevo_alumno)
        print(lista)
    else:
        print('Todos los campos son necesarios')
        
    agregar_alumnos(alumnos)
    
    
    
agregar_alumnos(alumnos)