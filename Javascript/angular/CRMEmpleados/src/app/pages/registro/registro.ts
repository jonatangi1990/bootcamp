import { UsuariosService } from './../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {

  UsuariosService = inject (UsuariosService)
  router = inject (Router);

  formulario: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })

  async onSubmit(){
    try {
      const response = await this.UsuariosService.registro(this.formulario.value);
      Swal.fire({
  title: "Bien registrado",
  width: 600,
  padding: "3em",
  color: "#716add",
  backdrop: `
    rgba(0,0,123,0.4)
    url("nyan-cat-nyan.gif")
    left top
    no-repeat
  `
});
console.log(response);
this.router.navigateByUrl('/login');
    } catch (error) {
      Swal.fire({
              title: 'Error',
              text:'Error en el envio. Revisa el formulario',
              icon:'error'
            });
      
    }
  }

}
