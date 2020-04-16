import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/services/data/products.data';
import { MatDialogRef } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private dialogRef: MatDialogRef<MyProductsComponent>,
    private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data;
      }, error => {
        console.log(error);
      }
    );
  }

  select(product: Product) {
    this.dialogRef.close(product);
  }
}
