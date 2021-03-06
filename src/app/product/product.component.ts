import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    //Get Product Data
    this._productService.GetProductData().subscribe(data=>{
      console.log("Product Data",data)
    })
  }

}
