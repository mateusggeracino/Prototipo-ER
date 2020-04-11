import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/modules/product/data/products.data';
import { GenerateRandomPrice } from '../../data/products-sales.data';

@Component({
  selector: 'app-add-off',
  templateUrl: './add-off.component.html',
  styleUrls: ['./add-off.component.scss']
})
export class AddOffComponent implements OnInit {
  product: Product;
  products: Product[];
  randomNumber: number;

  constructor() { }

  ngOnInit() {
    this.products = getProducts();
  }

  selectProduct(product: Product) {
    this.product = product;
    this.randomNumber = GenerateRandomPrice();
  }

  getTenPercent(price: number) {
    return price - (price * 0.1);
  }

  removeProduct() {
    this.product = null;
  }
}
