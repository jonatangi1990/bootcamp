import { IEmpleado } from './../Interfaces/IEmpleado';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
// aqui generare todos los metodos que me permitan trabajar con la api de empleados
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados';

  //Lanza la peticion para recuperar todos los empleados
  getAll(){ //como no cambiara no le metemos parametros
    return lastValueFrom(
      this.httpClient.get<IEmpleado []>(this.baseUrl) //entre <> ponemos el tipo que es (asi le digo que es de tipo IEmpleado array)
    );

  }

  getById(idEmpleado: string){
    return lastValueFrom(
      this.httpClient.get<IEmpleado>(`${this.baseUrl}/${idEmpleado}`)
    );

  }

  getByDepartamento(nombreDepartamento: string){
    return lastValueFrom(
      this.httpClient.get<IEmpleado[]>(`${this.baseUrl}/departamento/${nombreDepartamento}`)
    )
  }

  create(nuevoEmpleado: IEmpleado){
    return lastValueFrom(
      this.httpClient.post<IEmpleado>(this.baseUrl, nuevoEmpleado)//entre <> ponemos IEmpleado sin [] ya que retorna solo 1 empleado y no varios como en la anterior
    );

  }
  


  edit(idEmpleado: string, body: IEmpleado){
    return lastValueFrom(
      this.httpClient.put<IEmpleado>(`${this.baseUrl}/${idEmpleado}`, body)
    );

  }

  del(idEmpleado: string){
    return lastValueFrom(
      this.httpClient.delete<IEmpleado>(`${this.baseUrl}/${idEmpleado}`)

    )
  }

  
}
