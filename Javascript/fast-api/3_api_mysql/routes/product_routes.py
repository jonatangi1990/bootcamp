from fastapi import APIRouter
from controllers import product_controller

router = APIRouter()

#http://localhost:8000/products/
@router.get('/', status_code=200)
async def get_all ():
    return await product_controller.get_products_list()

@router.get('/{id_product}', status_code=200)
async def get_by_id(id_product: int):
    return await product_controller.get_one_product(id_product)



#quiero una ruta que me permita sacar un producto o varios por un precio minimo y maximo

#quiero una ruta que me permita sacar un producto por su titulo,debera devolverme un listado de productos,si escribo iphone => me tendra que devolver todos los qie incluyan iphone en el titulo

#quiero una ruta que me permita devolver un listado de productos que no esten en stock 

#quiero una ruta que me permita devolver un listado de productos con cantidad mayor de 10