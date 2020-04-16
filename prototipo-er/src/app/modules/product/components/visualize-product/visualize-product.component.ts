import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/shared/product/product';

@Component({
  selector: 'app-visualize-product',
  templateUrl: './visualize-product.component.html',
  styleUrls: ['./visualize-product.component.scss']
})
export class VisualizeProductComponent implements OnInit {
  product: Product;
  constructor(
    private dialogRef: MatDialogRef<VisualizeProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.product) {
      this.product = this.data.product;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
