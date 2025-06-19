/**
 *Repite una serie de sentencias en funcion de una condicion
 
  Sintaxis:

  while (Condicion) {
    
  }
 *
 */

  let i = 1;
  while(i <= 10){
    console.log(i);
    i++;
  }

  let j = 1
  while(j <= 1000){
    if(j % 2 === 0) {
        console.log(j);
    }
    j++;
  }

  /** DO-WHILE
   * Se ejecuta una vez como minimo
   */

  let frase = '';
  do{
    frase = prompt('Dame una frase. Escribe "salir" para terminar');
    console.log(frase);
  }while(frase != 'salir')