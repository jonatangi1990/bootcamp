import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuario } from '../Interfaces/IUsuario';
import { lastValueFrom } from 'rxjs';

type LoginResponse = {
  succes: string,
  token: string,
  user: IUsuario
} //tipos, interfaces y clases comienzan en mayusculas
  


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpclient = inject (HttpClient);
  private baseUrl:string = 'https://crm-empleados.onrender.com/api/usuarios';

  registro(body: IUsuario){
    return lastValueFrom(
      this.httpclient.post<{succes: string}>(`${this.baseUrl}/registro`, body)
    )
  }

  login(body: IUsuario){
    return lastValueFrom(
      this.httpclient.post<LoginResponse>(`${this.baseUrl}/login`, body)
      // lo que metemos entre <> es el tipo que en este caso lo creamos previamente para que no quede sucio
    )
  }

  isLogged(){
    const token = localStorage.getItem('token_crm');
    if(!token){
      return false;
    }
    return true;
  }
}
