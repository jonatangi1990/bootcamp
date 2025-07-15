import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IMonster } from '../../Interface/IMonster';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://mhw-db.com/monsters';


  getAll(){
    return lastValueFrom(
      this.httpClient.get<IMonster[]>(this.baseUrl)
    )
  }

  getById(idMonster: string){
    return lastValueFrom(
      this.httpClient.get<IMonster>(`${this.baseUrl}/${idMonster}`)
    )
  }
}
