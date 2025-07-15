from pydantic import BaseModel #asi podre crear los modelos que son como las interfaces
from fastapi import HTTPException #sirve para lanzar las excepciones que son los codigos de error

class User(BaseModel):
    id: int
    name: str
    age: int
    email: str
    
usuarios = [
    {"id": 1, "name": "Alice", "age": 25, "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "age": 30, "email": "bob@example.com"},
    {"id": 3, "name": "Charlie", "age": 22, "email": "charlie@example.com"},
    {"id": 4, "name": "Diana", "age": 28, "email": "diana@example.com"},
    {"id": 5, "name": "Eve", "age": 35, "email": "eve@example.com"},
    {"id": 6, "name": "Frank", "age": 40, "email": "frank@example.com"},
    {"id": 7, "name": "Grace", "age": 27, "email": "grace@example.com"},
    {"id": 8, "name": "Hank", "age": 32, "email": "hank@example.com"},
    {"id": 9, "name": "Ivy", "age": 29, "email": "ivy@example.com"},
    {"id": 10, "name": "Jack", "age": 24, "email": "jack@example.com"},
]

def cargar_todos_usuarios():
    return usuarios

def cargar_un_usuario(id: int):
    for usuario in usuarios:
        if usuario['id'] == id:
            return usuario
    raise HTTPException(status_code=404, detail='Usuario no encontrado')


def buscar_usuario_email(email: str):
    for usuario in usuarios:
        if usuario['email'] == email:
            return True
        
    return False


def guardar_un_usuario(usuario: User):
    email_existe = buscar_usuario_email(usuario.email)
    if not email_existe:
        usuarios.append(usuario.model_dump()) #model_dump convierte un usuario de tipo User en un diccionario para hacer append en el array
        return usuarios
    else:
        raise HTTPException(status_code=400, detail='Usuario duplicado')
    
    
def buscar_usuario_id(id: int):
    for usuario in usuarios:
        if usuario['id'] == id:
            return usuario
    return False
    
def borrar_un_usuario(id: int):
    usuario_borrar = buscar_usuario_id(id)
    if usuario_borrar:
        usuarios.remove(usuario_borrar)
        return usuarios
    else:
        raise HTTPException(status_code=400, detail='Usuario no existe, no puedo borrarlo')
    
    
def actualizar_un_usuario(id:int, usuario: User):
    if id != usuario.id:
        raise HTTPException(status_code=400, detail='No coinciden')
    for cont, user in enumerate(usuarios):
        if user['id'] == id:
            usuarios[cont] = usuario.model_dump() # lo transforma a tipo diccionario
            print(usuarios)
            return usuarios[cont]
    raise HTTPException(status_code=404, detail='Usuario no encontrado')



def buscar_por_edad(agemin:int, agemax:int):
    if agemin > agemax:
        raise HTTPException(
            status_code=400, detail="La edad minima no puede ser mayor que la maxima")
        
    usuarios_busqueda = []
    for user in usuarios:
        if user['age'] >= agemin and user['age'] <= agemax:
            usuarios_busqueda.append(user)
    return usuarios_busqueda




def buscar_por_email_nombre(busqueda:str):
    #Teneis que decirme si existe un nombre o email que contenga lo que tiene busqueda. Juan => Juan, Juan Antonio, Juan jose, juan@gmail.com, manueljuan@gmail.com. Me tendria que devolver todos los datos del alumno => array.
    if busqueda == "":
        raise HTTPException(
            status_code=400, detail='El campo de busqueda no puede ser vacio')
    return (usuario for usuario in usuarios if busqueda.lower() in usuario['name'].lower() or busqueda.lower() in usuario['email'].lower())
