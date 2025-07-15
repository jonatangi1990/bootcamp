from models.user_model import cargar_todos_usuarios, cargar_un_usuario, User, guardar_un_usuario, borrar_un_usuario, actualizar_un_usuario, buscar_por_edad, buscar_por_email_nombre


def obtener_usuarios():
    return cargar_todos_usuarios()

def obtener_usuario_byid(id: int):
    return cargar_un_usuario(id)

def insertar_usuario(usuario: User):
    return guardar_un_usuario(usuario)

def delete_usuario(id: int):
    return borrar_un_usuario(id)

def actualizar_usuario(id:int, usuario: User):
    return actualizar_un_usuario(id, usuario)

def filter_by_age(agemin:int, agemax:int):
    return buscar_por_edad(agemin, agemax)

def filter_by_text(busqueda:str):
    return buscar_por_email_nombre(busqueda)