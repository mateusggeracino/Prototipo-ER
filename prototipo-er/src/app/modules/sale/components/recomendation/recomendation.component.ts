import { Component, OnInit } from '@angular/core';
import { ProductSales, Product } from 'src/app/shared/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.scss']
})
export class RecomendationComponent implements OnInit {
  products: Product[] = [];
  removeButton = 'Incluir';
  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];

    this.productService.getAll().subscribe(
      data => {
        data.map(x => {
          if (!x.off) {
            x.priceOff = x.price - (x.price * .15);
            this.products.push(x);
          }
        });
      }, error => {
        console.log(error);
      }
    );
  }

  updateList(product: Product) {
    product.off = true;
    this.productService.update(product)
      .then(() => { this.snackBar.open('Promoção adicionada com sucesso.', 'OK', { duration: 2000 }); });

    this.products = [];
  }
}
