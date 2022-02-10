import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer"

  constructor( private router: Router, private productService: ProductService){ }
  
 
  ngOnInit(): void {
    
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.showMessage('Operação executada com sucesso')
  }


  // fazerAlgo(): void {
  //   console.log('Fazendo Algo')
  // }

}
