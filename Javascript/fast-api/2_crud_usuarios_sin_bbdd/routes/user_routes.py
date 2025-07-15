from fastapi import APIRouter
#en este fichero ya nos encontramos en la ruta /users, todas las rutas que creemos aqui entro tendran esa base /users
from controllers import user_controler
from models.user_model import User

router = APIRouter()

@router.get('/', status_code=200) #obtener todos los usuarios
def get_users():
    return user_controler.obtener_usuarios()
@router.get('/{id}', status_code=200) #obtener un usuario por id
def get_user_by_id(id: str):
    return user_controler.obtener_usuario_byid(int(id))
@router.post('/', status_code=201) #insertar un usuario
def insert_user(usuario: User):
    return user_controler.insertar_usuario(usuario)
@router.put('/{id}', status_code=200) # actualizar un usuario
def put_user(id: int, usuario: User):
    return user_controler.actualizar_usuario(id, usuario)
@router.delete('/{id}', status_code=200) # borrar un usuario
def delet_user(id: str):
    return user_controler.delete_usuario(int(id))


# Query params. Son parametros que nop tienen una ruta fija, perimieten realizar busquedas por parametros mas versatiles, se usa principalmente para filtros.


# ruta con filtros por edad http://localhost:8000/users/filter/age?agemin=12&agemax=24
@router.get('/filter/age', status_code=200)
def get_user_by_age(agemin: int, agemax:int):
    return user_controler.filter_by_age(agemin, agemax)
    
    
# http://localhost:8000/users/filter/search?busqueda=Alice
@router.get('/filter/search', status_code=200)
def get_user_by_search(busqueda: str):
    return user_controler.filter_by_text(busqueda)



