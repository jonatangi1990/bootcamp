import { Routes } from '@angular/router';
import { Registro } from './pages/registro/registro';
import { Hotel } from './pages/hotel/hotel';

export const routes: Routes = [
    { path: '', redirectTo: '/registro', pathMatch: 'full'}, //siempre que se redirija en la ruta vacia(principal) hay que añadir el pathMatch para que no de error ya que entraria en conflicto con las demas
    { path: 'registro', component: Registro},
    { path: 'hotel', component: Hotel},
    { path: '**', redirectTo: '/registro'}
];
