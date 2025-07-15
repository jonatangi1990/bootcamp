import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../interfaces/IProduct';
import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  productsService = inject(ProductsService); //asi consigo enlazarlo

  arrProductos: IProduct[] = [];
  page:number = 1;
  totalPages: number = 0

  
  

  async ngOnInit(){
    const response = await this.productsService.getAll();
    this.arrProductos = response.results;
    this.totalPages = response.total_pages; //como aqui ya estamos pidiendo cosas al servidor añadimos tambien este para que nos de el total de paginas
  }

  async onClick(siguiente: boolean){
    this.page = siguiente ? this.page +1 : this.page -1;

    /* if(siguiente){
      if(this.page !== this.totalPages)
    this.page++;
    }else {
    if (this.page !==)
      this.page --;
    }  igual que el ternario pero añadiendo un condicional*/

    const response = await this.productsService.getAll(this.page);
    this.arrProductos = response.results;
  }

}
