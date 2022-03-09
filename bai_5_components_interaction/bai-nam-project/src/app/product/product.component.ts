import {Component, OnInit} from '@angular/core';
import {Product_service} from "../service/product_service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  flag = false;
  productList: Product[];
  productService: Product_service;

  constructor() {
    this.productService = new Product_service();
  }

  ngOnInit(): void {
  }

  public getProductService(): void{
    this.productList = this.productService.getProducts();
  }

}
