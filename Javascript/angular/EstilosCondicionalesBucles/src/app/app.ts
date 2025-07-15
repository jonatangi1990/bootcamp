import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from "./components/formulario/formulario";
import { Estilos } from "./components/estilos/estilos";
import { Condicionales } from "./components/condicionales/condicionales";
import { CardProducto } from "./components/card-producto/card-producto";
import { IProducto } from './interfaces/IProducto';
import { NotificadorContador } from "./components/notificador-contador/notificador-contador";
import { FormularioProducto } from "./components/formulario-producto/formulario-producto";
import { Bucles } from "./components/bucles/bucles";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario, Estilos, Condicionales, CardProducto, NotificadorContador, FormularioProducto, Bucles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EstilosCondicionalesBucles';

  onMultiplo2($event: number){
    console.log(`El multiplo de 2 es ${$event}`)
  }

  onMulti($event: number){
    if ($event > 10){
      console.log(`Mayor que 10: ${$event}`);
    }else if($event === 0){
      console.log("Reseteado a 0");
    }else {
      console.log(`Menor que 10: ${$event}`)
    }
  }

  

  

  productos: IProducto[] = [
  {
    nombre: 'Camiseta deportiva',
    precio: 19.99,
    departamento: 'Ropa',
    stock: 25,
    disponible: true,
    oferta: false
  },
  {
    nombre: 'Balón de fútbol',
    precio: 29.95,
    departamento: 'Deportes',
    stock: 15,
    disponible: true,
    oferta: true
  },
  {
    nombre: 'Auriculares Bluetooth',
    precio: 49.99,
    departamento: 'Electrónica',
    stock: 8,
    disponible: false,
    oferta: false
  },
  {
    nombre: 'Libro de cocina saludable',
    precio: 17.50,
    departamento: 'Libros',
    stock: 40,
    disponible: true,
    oferta: true
  },
  {
    nombre: 'Zapatillas de running',
    precio: 59.90,
    departamento: 'Calzado',
    stock: 12,
    disponible: true,
    oferta: false
  }
];

  
}
