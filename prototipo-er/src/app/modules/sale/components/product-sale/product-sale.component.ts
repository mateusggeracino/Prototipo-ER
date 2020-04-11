import { Component, OnInit, Input } from '@angular/core';
import { ProductSales } from 'src/app/shared/product/product';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  @Input() product: ProductSales;

  constructor() { }

  ngOnInit() {
  }
}
