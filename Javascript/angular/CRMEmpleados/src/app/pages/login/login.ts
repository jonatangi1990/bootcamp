import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  UsuariosService = inject (UsuariosService);
  router = inject (Router);

  formulario: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

   async onSubmit(){
      try {
        const response = await this.UsuariosService.login(this.formulario.value);
        Swal.fire({
    title: "Bien logeado",
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
  //Guardo el token en localStorage para posteriormente poder usarlo
  localStorage.setItem('token_crm', response.token);
  //Estamos "logeados" si tenemos el token_crm en localStorage
  this.router.navigateByUrl('empleados');
  
      } catch (error) {
        Swal.fire({
                title: 'Error',
                text:'Error en el login. Revisa el formulario',
                icon:'error'
              });
        
      }
    }

}
