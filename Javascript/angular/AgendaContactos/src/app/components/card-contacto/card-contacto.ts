import { Component, Input } from '@angular/core';
import { IContacto } from '../../interfaces/IContacto';

@Component({
  selector: 'card-contacto',
  imports: [],
  templateUrl: './card-contacto.html',
  styleUrl: './card-contacto.css'
})
export class CardContacto {
  @Input() contacto: IContacto | undefined = {
    nombre: 'Marisa', email:'mari@gmail.com', telefono: '67657647' , departamento: 'it'
  }


}
