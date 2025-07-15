import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { Monster } from './pages/monster/monster';

export const routes: Routes = [
    { path: 'monsters', component: MonsterList},
    { path: 'monsters/:idMonster', component: Monster},
];
