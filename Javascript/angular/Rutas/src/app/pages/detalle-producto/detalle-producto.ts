import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProducto {

  @Input() idProducto: string = ''                        //el input tiene que llamarse igual que pusimos en las rutas
}
