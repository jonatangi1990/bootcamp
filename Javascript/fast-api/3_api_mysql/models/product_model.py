from pydantic import BaseModel





class Product(BaseModel):
    id: int
    title: str
    price: float
    quantity: int
    status: int
    
    
class ProductCreate(BaseModel):
    title: str
    price: float
    quantity: int
    status: int