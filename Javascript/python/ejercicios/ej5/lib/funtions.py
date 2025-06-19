alumnos = [
    {"nombre": "Alice", "nota": 8.5},
    {"nombre": "Bob", "nota": 9.0},
    {"nombre": "Charlie", "nota": 2.8},
    {"nombre": "Diana", "nota": 3.9},
    {"nombre": "Ethan", "nota": 4.5},
    {"nombre": "Fiona", "nota": 9.5},
    {"nombre": "George", "nota": 8.0},
    {"nombre": "Hannah", "nota": 1.7},
    {"nombre": "Ian", "nota": 8.3},
    {"nombre": "Julia", "nota": 3},
]

def filtrar_por_nota(list):
    lista_aprobados = []
    for alumno in list:
        if alumno['nota'] >= 5:
            lista_aprobados.append(alumno)
    return lista_aprobados

def pintar_alumnos(lista_aprobados):
    for alumno in lista_aprobados:
        print("""""""""""""""""")
        print(f'{alumno["nombre"]} tiene una nota de {alumno["nota"]}')
        print("""""""""""""""""")
        
def extraer_nombres_mayuscula(list):
    lista_filtrada = []
    for alumno in list:
        lista_filtrada.append(alumno['nombre'].upper())
    return lista_filtrada

def calcular_nota_media(alumnos):
    lista_notas = []
    for alumno in alumnos:
        lista_notas.append(alumno['nota'])
    return sum(lista_notas) / len(lista_notas)