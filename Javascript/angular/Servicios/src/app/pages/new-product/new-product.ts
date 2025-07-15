import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../interfaces/IProduct';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {

  productsService = inject(ProductsService);

  newProductForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    image: new FormControl(),
    active: new FormControl()
  });

  async onSubmit(){
    // se ejecuta cuando se pulsa el boton enviar en el formulario
    // Objeto con los datos del nuevo producto -> this.newProductFom.value
    const response = await this.productsService.create(this.newProductForm.value);
    console.log(response);

  }

}
