import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from "./components/formulario/formulario";
import { Estilos } from "./components/estilos/estilos";
import { Condicionales } from "./components/condicionales/condicionales";
import { CardProducto } from "./components/card-producto/card-producto";
import { IProducto } from './interfaces/IProducto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario, Estilos, Condicionales, CardProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EstilosCondicionalesBucles';

  

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
