import { Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-notificador-contador',
  imports: [],
  templateUrl: './notificador-contador.html',
  styleUrl: './notificador-contador.css'
})
export class NotificadorContador {

  @Output() multiplo2: EventEmitter<number> = new EventEmitter();
  @Output() mayor: EventEmitter<number> = new EventEmitter();
 


  numero: number = 0;

  onClick(incrementar:boolean) {
    //si incrementar es true numero -> ++
    //si incrementar es false numero -> --
  this.numero = incrementar ? this.numero + 1 : this.numero - 1
  //compruebo si es multiplo de 2

  if(this.numero % 2 === 0){
    this.multiplo2.emit(this.numero);
  }
  
  }
  onMulti(){
    this.numero = this.numero * 2
    if(this.numero >10)
      this.mayor.emit(this.numero);
      else if(this.numero === 0)
        this.mayor.emit(this.numero);
    else
        this.mayor.emit(this.numero)
  }
  

}
