from fastapi import APIRouter
from controllers import product_controller
from models.product_model import Product, ProductCreate #importamos los modelos para poder trabajar con ellos

router = APIRouter()

#http://localhost:8000/products/
@router.get('/', status_code=200)
async def get_all ():
    return await product_controller.get_products_list()

@router.get('/id/{id_product}', status_code=200)
async def get_by_id(id_product: int):
    return await product_controller.get_one_product(id_product)



#quiero una ruta que me permita sacar un producto o varios por un precio minimo y maximo

@router.get('/price/{min_price}/{max_price}', status_code=200)
async def get_price(min_price: float, max_price: float):
    return await product_controller.get_by_price(min_price, max_price)

#quiero una ruta que me permita sacar un producto por su titulo,debera devolverme un listado de productos,si escribo iphone => me tendra que devolver todos los qie incluyan iphone en el titulo

@router.get('/title/{title}', status_code=200)
async def get_title(title: str):
    return await product_controller.get_by_title(title)
#quiero una ruta que me permita devolver un listado de productos que no esten en stock 

@router.get('/stock/0', status_code=200)
async def get_stock():
    return await product_controller.get_by_zero_stock()

#quiero una ruta que me permita devolver un listado de productos con cantidad mayor de 10

@router.get('/stockmedio', status_code=200)
async def get_medio_stock():
    return await product_controller.get_by_medio_stock()

# TODO: Borrar productos. DEL y para no borrar toda la base de datos debemos borrar por id

@router.delete('/{id_product}', status_code=200)
async def delete_product(id_product: int):
    return await product_controller.delete_product(id_product)

#TODO: Crear producto, POST mandaremos la informacion del producto que queremos registrar, ojo sin ID. La respuesta debera devolverme los datos completos del producto creado con id


@router.post('/', status_code=201)
async def create_product(product: ProductCreate):
    return await product_controller.create_product(product)


#TODO: Actualizacion de un producto: PUT/PATCH (para campos concretos/producto entero). Actualizamos la informacion de la base de datos, ojo aqui si tenemos id. La respuesta sera como minimo el producto actualizado.

@router.put('/{id_product}', status_code=200)
async def update_product(id_product: int, product: Product):
    return await product_controller.update_product(id_product, product)


