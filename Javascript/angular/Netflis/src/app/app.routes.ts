import { NewSeries } from './pages/new-series/new-series';
import { SeriesList } from './pages/series-list/series-list';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'series', component: SeriesList},
    {path: 'series/new', component: NewSeries}
];
