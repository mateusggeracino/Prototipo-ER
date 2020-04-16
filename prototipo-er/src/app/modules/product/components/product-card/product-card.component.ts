import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/product/product';
import { MatDialog } from '@angular/material';
import { VisualizeProductComponent } from '../visualize-product/visualize-product.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  viewProduct() {
    const dialogRef = this.dialog.open(VisualizeProductComponent, {
      width: '350px',
      data: { product: this.product }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
