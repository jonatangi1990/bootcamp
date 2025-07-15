import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule, Contact} from 'lucide-angular';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  router = inject (Router);
  usuarioService = inject(UsuariosService);
  

  readonly Contact = Contact;

  async onClick(){
      try {
        const result = await Swal.fire({
          title: 'Salir',
          text: 'Quieres salir?',
          showCancelButton: true
        });
  
        if(result.isConfirmed){
  
          await localStorage.removeItem('token_crm');;
          Swal.fire({
    title: "Salido correctamente",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("nyan-cat-nyan.gif")
      left top
      no-repeat
    `
  });
  this.router.navigateByUrl('/login')
    
          
}
  
      } catch (error) {
        Swal.fire('Error', 'El empleado no existe.Revisa', 'error')
        
      }
      
    }

}
