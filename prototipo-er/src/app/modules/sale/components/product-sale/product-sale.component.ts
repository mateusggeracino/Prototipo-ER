import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductSales, Product } from 'src/app/shared/product/product';
import { MatDialog } from '@angular/material';
import { VisualizeProductComponent } from 'src/app/modules/product/components/visualize-product/visualize-product.component';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  @Input() product: Product;
  @Input() removeButton = 'Encerrar';
  @Output() cancel = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private productService: ProductService) { }

  ngOnInit() {
  }

  cancelOff(product: Product) {
    this.cancel.emit(product);
  }

  viewProduct() {
    const dialogRef = this.dialog.open(VisualizeProductComponent, {
      width: '350px',
      data: { product: this.product }
    });


  }
}
