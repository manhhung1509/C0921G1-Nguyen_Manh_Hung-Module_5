import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  message: string;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductById(parseInt(id));

    this.editForm = this.formBuilder.group({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });
  }

  submit(editForm: FormGroup) {
    const product = editForm.value ;
    this.productService.editProduct(product);
    this.backtolist();
  }


  backtolist() {
    this.router.navigateByUrl('product/list');
  }

}
