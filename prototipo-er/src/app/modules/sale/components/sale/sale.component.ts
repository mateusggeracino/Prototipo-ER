import { Component, OnInit } from '@angular/core';
import { ProductSales } from 'src/app/shared/product/product';
import { getProductsSales } from '../../data/products-sales.data';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  products: ProductSales[];
  constructor() { }

  ngOnInit() {
    this.products = getProductsSales();
  }
}

