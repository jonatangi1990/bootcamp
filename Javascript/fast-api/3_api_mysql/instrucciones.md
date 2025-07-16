#Api con Mysql

1- Crear un bbdd MySql llama upgrade-shop: Y crear la siguiente tabla
        products
            id
            title
            price
            quantity
            status


Crear una tabla users en la BBDD, llenarla con 10 registro
id: int
name: str
surname:str
age: int
mail: str
register_date: date => default now()
status: int -> Boolean
password: str
rol: ENUM('admin', 'user')

        
Crear fichero routes, models y controllers especifico para users
Models modelo de users sin id y con id
routes GET users/id => obtener los datos de un usuario
           PUT users/id => actualizar los datos de un usuario
           DEL users/id => borrar un usuario