import { Routes } from '@angular/router';
import { Info } from './pages/info/info';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { DetalleProducto } from './pages/detalle-producto/detalle-producto';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'informacion', component: Info}, //en path se pone el nombre de la url y en component es el componente que se activa, no tienene por que llamarse igual
    { path: 'contacto', component: Contact},
    { path:'productos/:idProducto',component: DetalleProducto},  // para que se active detalleproducto tengo que poner productos/: y el id del producto para que se haga dinamico
    
    
    
    
    { path: '**', redirectTo: ''}, //en esta si se equivoca con la url se rederige a la pag principal
    // { path: '**', redirectTo: Error404} para redirigir a una pagina que le comente que tiene un error pero la pag Error404 tiene que estar creada
];


