import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer"

  product: Product = {
    name: '',
    price: 1
  }

  constructor( private router: Router, private productService: ProductService){ }
  
 
  ngOnInit(): void {
    
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/products'])
    })

  }


  // fazerAlgo(): void {
  //   console.log('Fazendo Algo')
  // }

}
