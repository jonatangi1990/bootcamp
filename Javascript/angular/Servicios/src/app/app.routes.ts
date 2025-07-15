import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { NewProduct } from './pages/new-product/new-product';

export const routes: Routes = [
    {path: 'products', component: ProductList},
    {path: 'products/new', component: NewProduct} 
    
];
