import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';


type ApiResponse = {
  page: number,
  per_page: number, 
  total: number, 
  total_pages: number, 
  results: IProduct[]
}



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);  // httpClient nos permite crear peticiones http
  private baseUrl: string = 'https://peticiones.online/api/products';//como la utilizaremos mucho lo metemos en una variable

  
  getAll(page: number = 1){
    return lastValueFrom(
    this.httpClient.get<ApiResponse>(`${this.baseUrl}?page=${page}`)
    );

  }

  create(newProduct: IProduct){
    return lastValueFrom(
      this.httpClient.post<IProduct>(this.baseUrl, newProduct) // entre <> ponemos lo que nos devuelve, en este caso como es un producto ponemos IProduct ya que lo tenemos creado
    )
  }
}

//un observable esta pendiente de todos los cambios en tiempo real junto al servidor en cambio una proimesa solo te lo recoge una unica vez hasta que le vuelvas a realizar otra peticion
