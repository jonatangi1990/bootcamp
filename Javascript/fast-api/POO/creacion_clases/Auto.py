class Auto:
    #propiedades - atributos - variables
    color: str =""
    precio: float = 0
    combustible: str = ""
    estado: bool = True
    matricula: str = ""
    modelo: str = ""
    velocidad: int = 0
    
    #metodo - funcion - acciones que puede realizar mi objeto
    #funcion constructor no es obligatoria pero se ejecuta siempre, como programador me puede servir para inicializar datos. El metodo constructor en python es __init__()
    
    def __init__(self, color, price, model, type_gas): #siempre tiene que comenzar la funcion con el parametro self
        
        self.color = color
        self.precio = price
        self.combustible = type_gas
        self.modelo = model
        
    def matricular(self, numero_matricula):
        self.matricula = numero_matricula
        
    def acelerar(self, velocity):
        self.velocidad += velocity
        
    def frenar(self, velocity):
        self.velocidad -= velocity
        
        
ferrari = Auto('rojo', 1000000, 'f380', 'gasolina')
fiat = Auto('vino', 1500, 'topolino', 'diesel')

print(fiat.color)
print(ferrari.modelo)
ferrari.acelerar(100)
print(ferrari.velocidad)
print(fiat.velocidad)