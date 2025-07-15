from fastapi import FastAPI
from pydantic import BaseModel #BaseModel determina como se crea un modelo base

app = FastAPI()

#quiero generar una ruta por GET para que me devuelva una respuesta.

# endpoint estatico

# decorador. Es nuna funcion

@app.get("/")
def root():
    return {"Hello": "World"}

#crear una ruta "/mi_nombre" que me devuelva un objeto alumno con vuestro nombre

@app.get("/jonatan")
def alum():
    return {'alumno': 'Jonatan'}
    
        
    
products = [
    {'id': 1, 'name': 'leche', 'price': 2},
    {'id': 2, 'name': 'carne', 'price': 6},
    {'id': 3, 'name': 'huevos', 'price': 3},
    {'id': 4, 'name': 'fruta', 'price': 1},
    {'id': 5, 'name': 'pescado', 'price': 12}
]

#crear endpoint estatico que permita devolver la lista de productos /productos

@app.get("/productos")
def productos():
    return {'total': len(products), 'results': products}

   
#endpoint dinamico
@app.get('/productos/{id}')
def get_products_by_id(id: str):
    id_producto = int(id)
    for product in products:
        if product['id'] == id_producto:
            return product
        else:
            return {'message': f"el producto con id {id_producto} no existe"}
        
@app.get('/productos/price/{min}/{max}')
def get_products_by_price(min: str, max: str):
    result = []
    for product in products:
        if product['price'] >= float(min) and product['price'] <= float(max):
            result.append(product)
    if len(result) != 0:
        return result
    else:
        return 'No hay productos cos esos precios'
   
# inserccion de un producto creando un modelo Product. Vamos a usar una libreria de python llamada Pydantic

class Product(BaseModel):
    id:int
    name:str
    price:float
    
@app.post('/productos')
def crear_producto(producto: Product):
    #insertar un producto en el array
    products.append(producto)
    return products

#borrar un producto del array productos

@app.delete('/productos/{id}')
def borrar_producto(id: str):
    for product in products:
        if product['id'] == int(id):
            products.remove(product)
            return {'msg': 'Producto borrado correctamente' , 'result': products}
    return {'msg': 'el producto no existe'}