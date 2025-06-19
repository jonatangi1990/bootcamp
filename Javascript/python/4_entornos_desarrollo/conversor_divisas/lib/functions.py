# API: https://open.er-api.com/v6/latest/EUR

import requests as rq

def obtener_tipo_cambio(current_money, convert_money):
    url = 'https://open.er-api.com/v6/latest/'
    url_final = url + current_money # me devolveria https://open.er-api.com/v6/latest/EUR (si yo lo quisiese cambiar a euros)
    try:
        response = rq.get(url_final)
        data = response.json()
        diccionario = data['rates']
        return diccionario[convert_money]
    except:
        print('Codigo de moneda no admitido')
        return False

def convertir_cantidad(cantidad, tipo_cambio):
    resultado = cantidad * tipo_cambio
    return resultado