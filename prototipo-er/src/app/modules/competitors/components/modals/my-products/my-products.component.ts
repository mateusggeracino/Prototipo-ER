import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/modules/product/data/products.data';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  products: Product[];
  constructor(private dialogRef: MatDialogRef<MyProductsComponent>) { }

  ngOnInit() {
    this.products = getProducts();
  }

  select(product: Product) {
    this.dialogRef.close(product);
  }
}
