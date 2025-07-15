from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import aiomysql
import os




app = FastAPI()
load_dotenv() #esta funcion carga las variables de entorno desde al archivo .env

#Creacion del modelo en base a nuestra base de datos

class Product(BaseModel):
    id: int
    title: str
    price: float
    quantity: int
    status: int



#Conexion a base de datos usando el fichero .env para ello necesitamos la libreria dotenv de python
#La funcion get_conexion tiene que ser asincrona
async def get_conexion():
    return await aiomysql.connect(
        host=os.getenv("MYSQL_HOST"),
        port=int(os.getenv("MYSQL_PORT")),
        user=os.getenv("MYSQL_USER"),
        password=os.getenv("MYSQL_PASSWORD"),
        db=os.getenv("MYSQL_DATABASE")
    )


@app.get('/')
def init():
    return 'Conexion iniciada con el servidor'


@app.get('/products', status_code=200)
async def get_all_products():
    #obtener el acceso a base de datos asincrona
    conn = await get_conexion()
    #situo el cursor al final de mi tabla para consultar todos los datos de la misma
    async with conn.cursor(aiomysql.DictCursor) as cursor:
        #Consultamos los datos
        await cursor.execute('SELECT * FROM upgrade_shop.products')
        #obtener los resultados
        data = await cursor.fetchall()
    conn.close() #siempre cerrarlo para que no quede abierto
    return data
        
