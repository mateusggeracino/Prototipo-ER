import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProductSales, Product } from 'src/app/shared/product/product';
import { getProductsSales } from 'src/app/modules/sale/data/products-sales.data';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})
export class TableProductComponent implements OnInit {
  @Output() productSelected = new EventEmitter();
  productCompetitors: any;
  selectedRowIndex: number;
  inputText = '';

  displayedColumns: string[] = ['competitor', 'product'];
  constructor() { }

  ngOnInit() {
    this.productCompetitors = new MatTableDataSource(getProductsSales());
  }

  filter() {
    this.productCompetitors.filter = this.inputText.trim().toLowerCase();
  }
  productCompetitorSelect(product: ProductSales) {
    this.selectedRowIndex = product.id;
    this.productSelected.emit(product);
  }

  clearFilter() {
    this.inputText = '';
    this.filter();
  }
}
