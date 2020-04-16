import { Component, OnInit } from '@angular/core';
import { ProductSales, Product } from 'src/app/shared/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(
      data => {
        this.products = data.filter(x => x.off);
      }, error => {
        console.log(error);
      }
    );
  }

  removeProduct(product: Product) {
    product.off = false;
    product.priceOff = 0;

    this.updateProduct(product);
  }

  updateProduct(product: Product) {
    this.productService.update(product)
      .then(() => { this.snackBar.open('Promoção encerrada com sucesso.', 'OK', { duration: 2000 }); })
      .catch((error) => {
        console.log(error);
      });
  }
}

