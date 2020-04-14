import { Component, OnInit } from '@angular/core';
import { ProductSales } from 'src/app/shared/product/product';
import { getProductsSales } from '../../data/products-sales.data';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent implements OnInit {
  products: ProductSales[];
  removeButton = 'Incluir';
  constructor() { }

  ngOnInit() {
    this.products = getProductsSales();
  }

  removeProduct(product: ProductSales) {
    const index = this.products.findIndex(x => x.id === product.id);

    this.products.splice(index, 1);
  }
}
