import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContacto } from "./components/card-contacto/card-contacto";
import { ListaContactos } from "./components/lista-contactos/lista-contactos";
import { Formulario } from "./components/formulario/formulario";
import { IContacto } from './interfaces/IContacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardContacto, ListaContactos, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  arrContactos: IContacto[] = [];
  

  onContactoCreado($event: IContacto){
    this.arrContactos.push($event);
    console.log(this.arrContactos);

  }
}
