import { Component, OnInit } from '@angular/core';
import { Product, ProductSales } from 'src/app/shared/product/product';
import { getProducts } from 'src/app/modules/product/data/products.data';
import { getProductsSales } from 'src/app/modules/sale/data/products-sales.data';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {
  myProducts: Product[] = [];
  productCompetitors: ProductSales[] = [];
  productCompetitor: ProductSales;

  constructor() { }

  ngOnInit() {
    this.myProducts = getProducts();
    this.productCompetitors = getProductsSales();
    this.productCompetitor = this.productCompetitors[0];
  }

  productCompetitorSelect(product: ProductSales) {
    this.productCompetitor = product;
  }
}
