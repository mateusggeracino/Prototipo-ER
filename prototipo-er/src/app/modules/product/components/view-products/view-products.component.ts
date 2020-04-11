import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { getProducts } from '../../data/products.data';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  products: Product[];
  states: any[] = [];
  constructor() { }

  ngOnInit() {
    this.products = getProducts();
    this.states = [
      'Mais Vendidos', 'Menos Vendidos', 'Maior Quantidade', 'Mais Buscado'
    ];
  }

}
