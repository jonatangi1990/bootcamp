from fastapi import APIRouter
from controllers import user_controller
from models.user_model import User, UserCreate 


router = APIRouter()


@router.get('/{id_user}', status_code=200)
async def get_by_id(id_user: int):
    return await user_controller.get_one_user(id_user)




@router.put('/{id_user}', status_code=200)
async def update_user(id_user: int, user: User):
    return await user_controller.update_user(id_user, user)



@router.delete('/{id_user}', status_code=200)
async def delete_user(id_user: int):
    return await user_controller.delete_user(id_user)


#TODO: ruta de todos los usuarios

@router.get('/', status_code=200)
async def get_all ():
    return await user_controller.get_users_list()


#TODO: ruta para registrar 1 usuario

@router.post('/', status_code=201)
async def create_user(user: UserCreate):
    return await user_controller.create_user(user)