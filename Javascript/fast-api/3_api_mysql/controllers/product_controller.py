from db.config import get_conexion
from fastapi import HTTPException
from models.product_model import Product, ProductCreate
import aiomysql



async def get_products_list():
    try:
    #obtenemos acceso a la base de datos de forma asincrona
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
        #consultamos los datos
            await cursor.execute('SELECT * FROM upgrade_shop.products')
        #obtener los resultados
            data = await cursor.fetchall()
        
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
    
    
async def get_one_product(id_product):
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute('SELECT * FROM upgrade_shop.products WHERE id=%s', (id_product,))
            data = await cursor.fetchone()
        
        if data:
            return data
        else:
            raise HTTPException(status_code=404, detail='Producto no encontrado')
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
    
    
async def get_by_price(min_price, max_price):
    
    if min_price > max_price:
        raise HTTPException(status_code=400, detail="El precio minimo no puede ser superior al maximo")
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute('SELECT * FROM upgrade_shop.products WHERE price between %s and %s', (min_price, max_price))
            data = await cursor.fetchall()
        
        if len(data) != 0:
            return data
        else:
            raise HTTPException(status_code=404, detail='Producto no encontrado')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
    
    
async def get_by_title(title):
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            query = 'SELECT * FROM upgrade_shop.products WHERE LOWER(title) LIKE %s'
            value = f"%{title.lower()}%"
            await cursor.execute(query, (value,))
            data = await cursor.fetchall()
        

        if data:
            return data
        else:
            raise HTTPException(
                status_code=404, detail='Nombre del producto no encontrado')

    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Error: {str(e)}')
    
    finally:
        conn.close()
    
    
async def get_by_zero_stock():
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute('SELECT * FROM upgrade_shop.products WHERE status = 0',)
            data = await cursor.fetchall()
        
        if len(data) != 0:
            return data
        else:
            raise HTTPException(status_code=404, detail='Producto no encontrado')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    finally:
        conn.close()
    
    
async def get_by_medio_stock():
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute('SELECT * FROM upgrade_shop.products WHERE quantity > 10',)
            data = await cursor.fetchall()
        
        if data:
            return data
        else:
            raise HTTPException(status_code=404, detail='Producto no encontrado')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
    
    finally:
        conn.close()
        
        
        
        
async def delete_product(id_product:int):
    product = await get_one_product(id_product)
    if product:
        #puedo borrar
        try:
            conn = await get_conexion()
            async with conn.cursor(aiomysql.DictCursor) as cursor:
                await cursor.execute('DELETE FROM upgrade_shop.products WHERE id=%s', (id_product,))
                #tenemos que confirmar la consulta de la linea anterior
                await conn.commit()
                return {'msg': f'El producto con id {id_product} ha sido eliminado exitosamente','status': True}
        except Exception as e:
            raise HTTPException(status_code=500, detail=f'Error: {str(e)}')
        
        finally:
            conn.close()
    else:
        raise HTTPException(status_code=404, detail=f'Producto con id {id_product} no encontrado')
    

async def create_product(product: ProductCreate):
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute("INSERT INTO upgrade_shop.products (title, quantity, status, price) VALUES (%s,%s,%s,%s)", (
                product.title,
                product.quantity,
                product.status,
                product.price
            ))
            await conn.commit()
            #lastroid me devuleve el id del producto que acabo de insertar
            nuevo_id = cursor.lastrowid #no es una funcion, es una propiedad de la conexion
            product = await get_one_product(nuevo_id)
            return product
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Error: {str(e)}')
    finally:
        conn.close()
        
        
        
async def update_product(id_product: int, product:Product):
    if id_product != product.id:
        raise HTTPException(status_code=400, detail='Los ID no coinciden')
    try:
        conn = await get_conexion()
        async with conn.cursor(aiomysql.DictCursor) as cursor:
            await cursor.execute("UPDATE upgrade_shop.products SET title=%s, quantity= %s, status= %s, price= %s WHERE id= %s", (
                product.title, 
                product.quantity, 
                product.status, 
                product.price, 
                product.id))
            await conn.commit()
            #ya tenemos el id de usuario, lo que tenemos que hacer es responder con el producto actualizado.
            product = await get_one_product(id_product)
            return {"msn": 'Producto actualizado correctamente', "item": product}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    finally:
        conn.close()