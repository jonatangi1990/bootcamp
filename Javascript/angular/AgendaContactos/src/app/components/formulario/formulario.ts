import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IContacto } from '../../interfaces/IContacto';
import { CardContacto } from "../card-contacto/card-contacto";

@Component({
  selector: 'formulario',
  imports: [FormsModule, CardContacto],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  nuevoContacto: IContacto = {
    nombre: '', email: '', telefono: '', departamento:''
  }

  @Output() contactoCreado: EventEmitter<IContacto> = new EventEmitter();

  onClick(){
    this.contactoCreado.emit(this.nuevoContacto);
    this.nuevoContacto = {
    nombre: '', email: '', telefono: '', departamento:''
  }
  }

}
