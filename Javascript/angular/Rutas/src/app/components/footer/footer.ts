import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  router = inject(Router); //se pone el nombre igual a lo que quieras importar, por eso se llaman ambos router

  onClick(ruta: string){
    //Hago cosas y luego navego
    this.router.navigateByUrl(ruta);
  }
}
