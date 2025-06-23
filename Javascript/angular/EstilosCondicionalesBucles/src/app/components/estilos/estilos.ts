import { Component } from '@angular/core';

@Component({
  selector: 'app-estilos',
  imports: [],
  templateUrl: './estilos.html',
  styleUrl: './estilos.css'
})
export class Estilos {

  estilosParrafo:any = {
    color: 'dodgerblue',
    backgroundColor: 'lightblue'
}

isActivo: boolean = true;

onCambiarColor(){
  // Copia del estilosParrafo
  const copia = {...this.estilosParrafo}; //con los (...) le indicas que te recoja los valores de lo que le pases para creartelo exactamente igual
  copia.color = 'green';
  this.estilosParrafo = copia;
  /* this.estilosParrafo = {...this.estilosParrafo, color:'red'} */
}

onCambiarFondo(color: string){
  this.estilosParrafo = {...this.estilosParrafo, backgroundColor: color}
}

onInput($event: Event){
  // extraer el elemento html (campo de texto)
  const htmlInput = $event.target as HTMLInputElement; //con el (as) kle indico de que valor es añadiendole el valor que quiero despues
  this.estilosParrafo = {
    ...this.estilosParrafo,
    color: htmlInput.value
  }
}

onRange($event: Event){
  const htmlInput = $event.target as HTMLInputElement;
  this.estilosParrafo = {...this.estilosParrafo, fontSize: htmlInput.value + 'px'}
}

}
