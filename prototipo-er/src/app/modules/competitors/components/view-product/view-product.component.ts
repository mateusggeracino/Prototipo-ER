import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductSales } from 'src/app/shared/product/product';
import { MatDialog } from '@angular/material';
import { MyProductsComponent } from '../modals/my-products/my-products.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  @Input() product: Product;
  @Input() productCompetitor: ProductSales;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  dialogMyProducts() {
    const dialogRef = this.dialog.open(MyProductsComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.product = result;
      }
    });
  }
}
