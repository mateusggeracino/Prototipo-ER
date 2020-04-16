import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductSales } from 'src/app/shared/product/product';
import { MatDialog } from '@angular/material';
import { VisualizeProductComponent } from 'src/app/modules/product/components/visualize-product/visualize-product.component';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  @Input() product: ProductSales;
  @Input() removeButton = 'Encerrar';
  @Output() cancel = new EventEmitter();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  cancelOff() {
    this.cancel.emit(this.product);
  }

  viewProduct() {
    const dialogRef = this.dialog.open(VisualizeProductComponent, {
      width: '350px',
      data: { product: this.product }
    });


  }
}
