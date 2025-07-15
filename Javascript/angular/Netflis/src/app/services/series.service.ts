import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


import { lastValueFrom } from 'rxjs';
import { ISerie } from '../Interface/ISerie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/series';

  getAll(){
    return lastValueFrom(
      this.httpClient.get<ISerie[]>(this.baseUrl)
    )
  
  }

  createNew(nuevaSerie: ISerie){
    return lastValueFrom(
      this.httpClient.post<ISerie>(this.baseUrl, nuevaSerie)
    )
  }
}
