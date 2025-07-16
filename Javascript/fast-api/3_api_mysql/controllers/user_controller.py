from db.config import get_conexion
from fastapi import HTTPException
from models.user_model import User, UserCreate
import aiomysql





async def get_one_user(id_user: int):
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute('SELECT * FROM upgrade_shop.users WHERE id=%s', (id_user,))
            data = await cursor.fetchone()
        
        if data:
            return data
        else:
            raise HTTPException(status_code=404, detail='Usuario no encontrado')
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
        
        
        
async def update_user(id_user: int, user:User):
    if id_user != user.id:
        raise HTTPException(status_code=400, detail='Los ID no coinciden')
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute("UPDATE upgrade_shop.users SET name=%s, surname= %s, age= %s, mail= %s, status= %s, password= %s, rol= %s WHERE id= %s", (
                user.name, 
                user.surname, 
                user.age, 
                user.mail, 
                user.status,
                user.password,
                user.rol,
                id_user
                ))
            
            await conn.commit()
            #ya tenemos el id de usuario, lo que tenemos que hacer es responder con el usuario actualizado.
            user = await get_one_user(id_user)
            return {"msn": 'Usuario actualizado correctamente', "item": user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    finally:
        conn.close()
        
        
async def delete_user(id_user:int):
    user = await get_one_user(id_user)
    if user:
        #puedo borrar
        try:
            conn = await get_conexion()
            async with conn.cursor(aiomysql.DictCursor) as cursor:
                await cursor.execute('DELETE FROM upgrade_shop.users WHERE id=%s', (id_user,))
                #tenemos que confirmar la consulta de la linea anterior
                await conn.commit()
                return {'msg': f'El usuario con id {id_user} ha sido eliminado exitosamente','status': True}
        except Exception as e:
            raise HTTPException(status_code=500, detail=f'Error: {str(e)}')
        
        finally:
            conn.close()
    else:
        raise HTTPException(status_code=404, detail=f'Usuario con id {id_user} no encontrado')
    
    
async def get_users_list():
    try:
    #obtenemos acceso a la base de datos de forma asincrona
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
        #consultamos los datos
            await cursor.execute('SELECT * FROM upgrade_shop.users')
        #obtener los resultados
            data = await cursor.fetchall()
        
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
        
        
async def create_user(user: UserCreate):
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute("INSERT INTO upgrade_shop.users (name, surname, age, mail, password, rol) VALUES (%s,%s,%s,%s, %s, %s)", (
                user.name, 
                user.surname, 
                user.age, 
                user.mail, 
                user.password,
                user.rol,
                
            ))
            await conn.commit()
            #lastroid me devuleve el id del producto que acabo de insertar
            nuevo_id = cursor.lastrowid #no es una funcion, es una propiedad de la conexion
            user = await get_one_user(nuevo_id)
            return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Error: {str(e)}')
    finally:
        conn.close()
