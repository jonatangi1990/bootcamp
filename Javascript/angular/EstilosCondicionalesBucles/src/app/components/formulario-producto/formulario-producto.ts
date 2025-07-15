import { FormsModule } from '@angular/forms';
import { IProducto2 } from './../../interfaces/IProducto2';
import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule,JsonPipe],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {

  mensaje: string = '';
  
  
      producto2: IProducto2 = {
        nombre: '', precio: 0, descripcion: ''
      }
}
