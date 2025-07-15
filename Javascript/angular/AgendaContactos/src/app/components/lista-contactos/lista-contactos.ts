import { Component, Input } from '@angular/core';
import { IContacto } from '../../interfaces/IContacto';
import { CardContacto } from "../card-contacto/card-contacto";

@Component({
  selector: 'lista-contactos',
  imports: [CardContacto],
  templateUrl: './lista-contactos.html',
  styleUrl: './lista-contactos.css'
})
export class ListaContactos {
  @Input() contactos: IContacto [] = [] ; 

}
